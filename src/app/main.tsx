import React from 'react';
import ReactDOM from 'react-dom';
import { menuButtonQuery, portalQuery } from '../utils/documentQueries';
import Providers from './providers/Providers';
import App from './App';
import { CharacteristicTableData } from '../utils/characteristicTable';
import { getData } from '../utils/fetchChromeStorage';

async function addPortalRoot(): Promise<void>{ // 特徴表結果用ポータルを追加するためのルート要素を作成する関数
    // ポータルを追加するための要素を取得する
    let targetElement: HTMLElement|null = await challengeQuery(portalQuery);
    if (!targetElement){
         // 一定時間待機してもターゲットとなる要素が見つからなければ処理を止める
        throw new Error("特徴表欄を追加できませんでした")
    }

    // ポータルを追加するためのルート要素を作成
    const portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root-characteristicTable';
    targetElement.appendChild(portalRoot);

    // ポータルを要素の順番を無視して下部に固定する
    targetElement.style.display = "flex";
    targetElement.style.flexDirection = "column";
    portalRoot.style.order = "1";
}

async function addCharacteristicTableButton(data: CharacteristicTableData[]): Promise<void>{ // 特徴表ボタンを追加する関数
    // ボタンを追加するための要素を取得する
    let targetElement: HTMLElement|null = await challengeQuery(menuButtonQuery);
    if (!targetElement){
         // 一定時間待機してもターゲットとなる要素が見つからなければ処理を止める
        throw new Error("特徴表ボタンを追加できませんでした")
    }

    // コンテナを追加する
    const container: HTMLElement = document.createElement("div");
    container.style.position = "relative";
    container.style.right = "8rem";
    targetElement.style.position = "absolute";
    targetElement.after(container);

    ReactDOM.render(
        <React.StrictMode>
            <Providers characteristicTableData={data}>
                <App/>
            </Providers>
        </React.StrictMode>,
        container
    );
}

async function challengeQuery(query: string): Promise<HTMLElement | null>{ // 指定された要素が見つかるまで画面更新を待機する関数
    let targetElement: HTMLElement | null = null;

    // 監視するDOMノードを取得
    const targetNode: HTMLElement = document.body;

    return new Promise((resolve, _reject) => {
        // MutationObserverオブジェクトを作成
        const observer: MutationObserver = new MutationObserver((_mutationsList, _observer) => {
            // 変更が検出された際に実行されるコールバック関数
            targetElement = document.querySelector(query);
            if(targetElement !== null){
                // console.log(`目標の要素を発見しました\ndocument.querySelector("${query}")`,targetElement);
                observer.disconnect(); // DOMの監視を終了する
                resolve(targetElement); // 結果を返してPromiseを解決する
            }
        });

        // 監視オプションを設定
        const config = {
            childList: true, // 子ノードの変化を監視
            subtree: true // 子孫ノードも監視対象に含める
        };

        // 監視を開始
        observer.observe(targetNode, config);
    });
}

// URLが変更された際、変更先URLが特定のURLの場合、指定の関数を実行する関数
let urlRef: string = location.href; // URLの記憶用
function watchUrlChange(targetUrl: RegExp, func: () => {}){
    const observer = new MutationObserver(() => {
        const newUrl: string = location.href;
        if(urlRef !== newUrl){
            urlRef = newUrl; // urlRefを更新
            console.log("【urlが変更されました】", newUrl)
            // URLが変更された際の処理
            if(targetUrl.test(newUrl)){
                // editページの場合、拡張機能を実行する
                console.log("【urlがeditに変更されました】", newUrl)
                func();
            }
        }
    });
    observer.observe(document.body, {
        subtree: true,
        childList: true, 
        attributes: true,
        characterData: true
    });
}

// 拡張機能を実行する関数
async function main(data: CharacteristicTableData[]){
    console.log("いあきゃら特徴表")
    await addPortalRoot();
    await addCharacteristicTableButton(data);
}

// ローカルストレージからデータを読み込んだら、拡張機能を実行する
getData().then((response) => {
    // 目的のページのURLの正規表現
    const regexPattern: RegExp = /^https:\/\/iachara\.com\/edit\/.*/;

    // editページの場合、あるいは他のページからeditページに遷移した場合、拡張機能を実行する
    // 起動時にeditページの場合、拡張機能を実行する
    if(regexPattern.test(urlRef)) main(response);

    // いあきゃらはMPAなので、URLが変更された場合は拡張機能を再実行する
    watchUrlChange(regexPattern, () => main(response));
})
