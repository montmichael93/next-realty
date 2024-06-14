import { useRealty } from "@/app/providers/data-provider";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function FinancialData() {
  const { propertyData, dataNotFoundOnApi } = useRealty();
  return (
    <>
      <br />
      <br />
      <div className="grid gap-12">
        <div>
          <h2 className="text-3xl text-center font-bold lg:text-4xl">
            Financial
          </h2>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-light">Financing Considered</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.listingTerms.replace("Loan", "")}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Other Fees</div>
                <div className="font-medium">
                  {dataNotFoundOnApi.financial.otherFees}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Ownership</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.ownership}
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-light">Maintenance Fee</div>
                <div className="font-medium">
                  {" "}
                  {dataNotFoundOnApi.financial.maintenanceFee}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Taxes w/o Exempt</div>
                <div className="font-medium">
                  {" "}
                  {dataNotFoundOnApi.financial.taxesWoExempt}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Tax Rate</div>
                <div className="font-medium">
                  {propertyData?.propertyTaxRate}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
