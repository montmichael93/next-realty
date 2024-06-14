import { useRealty } from "@/app/providers/data-provider";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function AdditionalData() {
  const { propertyData } = useRealty();
  return (
    <>
      <br />
      <br />
      <div className="grid gap-12">
        <div>
          <h2 className="text-3xl text-center font-bold lg:text-4xl">
            Additional Information
          </h2>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-light">Dwelling Type</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.structureType}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">HOA Mandatory</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.hoaFeeTotal === null && "NO"}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">List type</div>
                <div className="font-medium">
                  {propertyData?.attributionInfo.listingAgreement}
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-light">Buyer Agent Compensations</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.buyerAgencyCompensation}{" "}
                  {propertyData?.resoFacts.buyerAgencyCompensationType}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Sub agent Compensation</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.subAgencyCompensation}{" "}
                  {propertyData?.resoFacts.subAgencyCompensationType}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
