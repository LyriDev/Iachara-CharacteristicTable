import { useContext, Fragment } from 'react';
import { styled } from '@mui/material/styles';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';

const StyledTd = styled("td")({
    border: "1px white solid",
    padding: 10,
    textAlign: "center"
});

export default function TabTitle({
    focusIndex
}: {
    focusIndex: number;
}){
    const {
        characteristicTableData
    } = useContext(CharacteristicTableContext);

    return (
        <table
            style={{
                margin: "0.5rem",
                border: "1px white solid",
                borderCollapse: "collapse"
            }}
        >
            <tbody>
                {[0, 1, 2, 3, 4, 5].map((parentIndex) => (
                    <>
                        <tr>
                            <StyledTd key={`parent-${parentIndex}`} rowSpan={10}>{parentIndex + 1}</StyledTd>
                            <StyledTd key={"child-0"}>1</StyledTd>
                            <StyledTd key={"child-0"}>{characteristicTableData[focusIndex].tableData[parentIndex][0]}</StyledTd>
                        </tr>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((childIndex) => (
                            <tr>
                                <StyledTd key={`child-${childIndex}`}>{childIndex + 1}</StyledTd>
                                <StyledTd key={`data-${childIndex}`}>
                                    {characteristicTableData[focusIndex].tableData[parentIndex][childIndex]}
                                </StyledTd>
                            </tr>
                        ))}
                    </>
                ))}
            </tbody>
        </table>
    )
};
