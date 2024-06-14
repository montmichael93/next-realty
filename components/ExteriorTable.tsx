import { useRealty } from "@/app/providers/data-provider";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function ExteriorData() {
  const { propertyData } = useRealty();
  return (
    <>
      <div className="grid gap-12">
        <div>
          <h2 className="text-3xl font-bold text-center lg:text-4xl">
            Exterior
          </h2>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-light">Roof</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.roofType}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Foundation</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.foundationDetails[0]}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Private Pool</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.hasPrivatePool === null && "No"}
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-light">Exterior Type</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.constructionMaterials[0]}
                </div>
                <div className="font-medium">
                  {propertyData?.resoFacts.constructionMaterials[1]}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Lot description</div>
                <div className="font-medium">
                  {" "}
                  {propertyData?.resoFacts.lotFeatures[0]}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Water Sewer</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.sewer[0]}
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-light">Area Pool</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.poolFeatures === null && "No"}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Exterior</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.lotFeatures[1]}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
