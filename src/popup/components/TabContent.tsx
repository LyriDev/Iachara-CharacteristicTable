import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { CharacteristicTableContext } from '../providers/CharacteristicTableProvider';
import TableTextarea from './TableTextarea';

const StyledTd = styled("td")({
    border: "1px white solid",
    padding: 10,
    textAlign: "center"
});

const DataTd = styled("td")({
    border: "1px white solid",
    padding: 0,
    width: "25rem"
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
                            <DataTd key={"child-0"}>
                                <TableTextarea
                                    focusIndex={focusIndex}
                                    parentIndex={parentIndex}
                                    childIndex={0}
                                />
                            </DataTd>
                        </tr>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((childIndex) => (
                            <tr>
                                <StyledTd key={`child-${childIndex}`}>{childIndex + 1}</StyledTd>
                                <DataTd key={`data-${childIndex}`}>
                                    <TableTextarea
                                        focusIndex={focusIndex}
                                        parentIndex={parentIndex}
                                        childIndex={childIndex}
                                    />
                                </DataTd>
                            </tr>
                        ))}
                    </>
                ))}
            </tbody>
        </table>
    )
};
