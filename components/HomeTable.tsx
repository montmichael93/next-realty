import { useRealty } from "@/app/providers/data-provider";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function HouseData() {
  const { propertyData, dataNotFoundOnApi } = useRealty();
  const atGlanceFacts = propertyData?.resoFacts.atAGlanceFacts;
  const getGarageInfo = atGlanceFacts && atGlanceFacts[4];

  return (
    <>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="font-light">MLS#</div>
              <div className="font-medium">{propertyData?.mlsid}</div>
            </TableCell>
            <TableCell>
              <div className="font-light">List Price</div>
              <div className="font-medium">${propertyData?.price}</div>
            </TableCell>
            <TableCell>
              <div className="font-light">Listing Status</div>
              <div className="font-medium">
                {" "}
                {dataNotFoundOnApi.general.listingStatus}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-light">Address</div>
              <div className="font-medium">
                {propertyData?.address.streetAddress}
              </div>
            </TableCell>
            <TableCell>
              <div className="font-light">City</div>
              <div className="font-medium">{propertyData?.address.city}</div>
            </TableCell>
            <TableCell>
              <div className="font-light">State</div>
              <div className="font-medium">{propertyData?.address.state}</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-light">Zip Code</div>
              <div className="font-medium">{propertyData?.address.zipcode}</div>
            </TableCell>
            <TableCell>
              <div className="font-light">County</div>
              <div className="font-medium">{propertyData?.county}</div>
            </TableCell>
            <TableCell>
              <div className="font-light">Subdivision</div>
              <div className="font-medium">
                {propertyData?.resoFacts.subdivisionName}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-light">Legal Description</div>
              <div className="font-medium">
                {" "}
                {dataNotFoundOnApi.general.legalDescription}
              </div>
            </TableCell>
            <TableCell>
              <div className="font-light">Property Type</div>
              <div className="font-medium">
                {propertyData?.propertyTypeDimension}
              </div>
            </TableCell>
            <TableCell>
              <div className="font-light">Bedroom</div>
              <div className="font-medium">
                {propertyData?.bedrooms} Bedroom(s)
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-light">Bath</div>
              <div className="font-medium">
                {propertyData?.bathrooms} Full &{" "}
                {propertyData?.resoFacts.bathroomsHalf} Half Bath(s)
              </div>
            </TableCell>
            <TableCell>
              <div className="font-light">Garage</div>
              <div className="font-medium">{getGarageInfo?.factValue}</div>
            </TableCell>
            <TableCell>
              <div className="font-light">Stories</div>
              <div className="font-medium">
                {" "}
                {dataNotFoundOnApi.general.stories}
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <div className="font-light">Building Size</div>
              <div className="font-medium">{propertyData?.livingArea}</div>
            </TableCell>
            <TableCell>
              <div className="font-light">Architecture Style</div>
              <div className="font-medium">
                {propertyData?.resoFacts.architecturalStyle}
              </div>
            </TableCell>
            <TableCell>
              <div className="font-light">Year Built</div>
              <div className="font-medium">
                {propertyData?.resoFacts.yearBuilt}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-light">Lot Size</div>
              <div className="font-medium">
                {propertyData?.resoFacts.lotSize}
              </div>
            </TableCell>
            <TableCell>
              <div className="font-light">Key Map</div>
              <div className="font-medium">
                {dataNotFoundOnApi.general.keyMap}
              </div>
            </TableCell>
            <TableCell>
              <div className="font-light">Market Area</div>
              <div className="font-medium">
                {" "}
                {dataNotFoundOnApi.general.marketArea}
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
    </>
  );
}
