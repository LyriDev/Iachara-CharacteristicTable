import { CharacteristicTableData, defaultCharacteristicTable } from "./characteristicTable";

// chrome.storageから特徴表のデータを取得する関数
export async function getTableData(): Promise<CharacteristicTableData[]>{
    const initialData: CharacteristicTableData[] = [ //デフォルト値
        {
            id: "initial",
            tableName: "特徴表",
            tableData: [...defaultCharacteristicTable]
        }
    ];

    return new Promise<CharacteristicTableData[]>((resolve, _reject) => {
        chrome.storage.local.get(["data"], function(response){
            try{
                const data: CharacteristicTableData[] = response["data"] as CharacteristicTableData[]
                resolve(data);
            }catch(error) {
                resolve(initialData);
            }
        });
    });
}

// chrome.storageに特徴表のデータを保存する関数
export async function saveTableData(data: CharacteristicTableData[]): Promise<void>{
    return new Promise<void>((resolve, _reject) => {
        try{
            chrome.storage.local.set({data}, function() {
                resolve();
            });
        }catch(e){
            throw e;
        }
    });
}