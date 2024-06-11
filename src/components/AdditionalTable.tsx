import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
"buyerAgencyCompensation"
export function AdditionalData() {
  const { propertyData } = useRealty();
  return (
    <>
      <br />
      <br />
      <div className="grid gap-12">
        <div>
          <h2 className="text-3xl font-bold lg:text-4xl">
            Additional Information
          </h2>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-light">Dwelling Type</div>
                <div className="font-medium">...</div>
              </TableCell>
              <TableCell>
                <div className="font-light">HOA Mandatory</div>
                <div className="font-medium">...</div>
              </TableCell>
              <TableCell>
                <div className="font-light">List type</div>
                <div className="font-medium">...</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-light">Buyer Agent Compensations</div>
                <div className="font-medium"></div>
              </TableCell>
              <TableCell>
                <div className="font-light">Sub agent Compensation</div>
                <div className="font-medium">Sub agent Compensation</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
