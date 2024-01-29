import { Table } from "@mantine/core";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { billsSummary } from "../../../constant";

const BillsSummaryTable = () => {
  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

  const isAllRowsSelected =
    billsSummary?.length > 0 && selectedRowIds.length === billsSummary.length;

  const handleRowCheckboxChange = (id: number) => {
    setSelectedRowIds((prevId) =>
      prevId.includes(id)
        ? prevId.filter((rowId) => rowId !== id)
        : [...prevId, id]
    );
  };

  const handleSelectAllRows = () => {
    if (billsSummary)
      if (isAllRowsSelected) {
        setSelectedRowIds([]);
      } else {
        setSelectedRowIds(billsSummary.map((row: any) => row.id));
      }
  };

  const isRowSelected = (id: number) => selectedRowIds.includes(id);

  return (
    <div className="mt-5 border-b">
      <Table.ScrollContainer minWidth={700}>
        <Table verticalSpacing={10} className="!rounded-xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th className="!rounded-tl-[15px] font-medium">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isAllRowsSelected}
                    onChange={handleSelectAllRows}
                  />
                  <div className="flex items-center gap-1">Bill number</div>
                </div>
              </Table.Th>
              <Table.Th className="font-medium">Supplier</Table.Th>
              <Table.Th className="font-medium">Date issued</Table.Th>
              <Table.Th className="font-medium">Due date</Table.Th>
              <Table.Th className="font-medium">Amount</Table.Th>
              <Table.Th className="font-medium">Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {billsSummary?.length > 0 &&
              billsSummary?.map((item) => (
                <Table.Tr key={item.id} className="text-secondary text-xs">
                  <Table.Td className="font-medium">
                    <div className="flex items-center gap-3 font-medium">
                      <input
                        type="checkbox"
                        checked={isRowSelected(item.id)}
                        onChange={() => handleRowCheckboxChange(item.id)}
                      />

                      {item.billNumber}
                    </div>
                  </Table.Td>
                  <Table.Td>{item.supplier}</Table.Td>
                  <Table.Td>{item.dateIssued}</Table.Td>
                  <Table.Td>{item.dueDate}</Table.Td>
                  <Table.Td>{item.amount}</Table.Td>
                  <Table.Td>
                    <SlOptionsVertical className="ml-3" />
                  </Table.Td>
                </Table.Tr>
              ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      {billsSummary?.length === 0 && (
        <h2 className="text-center font-bold text-black/80 flex justify-center w-full mx-auto my-20">
          No Data found!
        </h2>
      )}
    </div>
  );
};

export default BillsSummaryTable;
