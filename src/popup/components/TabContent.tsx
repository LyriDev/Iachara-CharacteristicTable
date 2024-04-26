import { styled } from '@mui/material/styles';
import TableTextarea from './TableTextarea';
import { Fragment } from 'react/jsx-runtime';
import Footer from './Footer';

const StyledTd = styled("td")({
    border: "1px white solid",
    padding: 10,
    textAlign: "center"
});

const DataTd = styled("td")({
    border: "1px white solid",
    padding: 0,
    width: "100%"
});

export default function TabContent({
    focusIndex
}: {
    focusIndex: number;
}){
    return (
        <div
            style={{
                padding: "0.5rem",
                paddingBottom: "3rem",
                overflowY: "hidden",
                position: "relative"
            }}
        >
            <table
                style={{
                    border: "1px white solid",
                    borderCollapse: "collapse"
                }}
            >
                <tbody>
                    {[0, 1, 2, 3, 4, 5].map((parentIndex) => (
                        <Fragment key={`parent-${parentIndex}`}>
                            <tr>
                                <StyledTd rowSpan={10}>{parentIndex + 1}</StyledTd>
                                <StyledTd>1</StyledTd>
                                <DataTd>
                                    <TableTextarea
                                        focusIndex={focusIndex}
                                        parentIndex={parentIndex}
                                        childIndex={0}
                                    />
                                </DataTd>
                            </tr>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((childIndex) => (
                                <tr key={`${parentIndex}-${childIndex}`}>
                                    <StyledTd>{childIndex + 1}</StyledTd>
                                    <DataTd>
                                        <TableTextarea
                                            focusIndex={focusIndex}
                                            parentIndex={parentIndex}
                                            childIndex={childIndex}
                                        />
                                    </DataTd>
                                </tr>
                            ))}
                        </Fragment>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    )
};
