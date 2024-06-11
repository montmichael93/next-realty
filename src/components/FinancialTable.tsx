import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function FinancialData() {
  return (
    <>
      <br />
      <br />
      <div className="grid gap-12">
        <div>
          <h2 className="text-3xl font-bold lg:text-4xl">Financial</h2>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-light">Financing Considered</div>
                <div className="font-medium">Financing Considered</div>
              </TableCell>
              <TableCell>
                <div className="font-light">Other Fees</div>
                <div className="font-medium">Other Fees</div>
              </TableCell>
              <TableCell>
                <div className="font-light">Ownership</div>
                <div className="font-medium">Ownership</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-light">Maintenance Fee</div>
                <div className="font-medium">Maintenance Fee</div>
              </TableCell>
              <TableCell>
                <div className="font-light">Taxes w/o Exempt</div>
                <div className="font-medium">Taxes w/o Exempt</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
