import { useRealty } from "@/app/providers/data-provider";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function InteriorData() {
  const { propertyData, dataNotFoundOnApi } = useRealty();
  const getToKitchen = propertyData?.resoFacts;
  const atGlanceFacts = propertyData?.resoFacts.atAGlanceFacts;
  const getCoolingInfo = atGlanceFacts && atGlanceFacts[3];
  const getHeatingInfo = atGlanceFacts && atGlanceFacts[2];
  return (
    <>
      <br />
      <br />
      <div className="grid gap-12">
        <div>
          <h2 className="text-3xl text-center font-bold lg:text-4xl">
            Interior
          </h2>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-light">Counter top</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.interiorFeatures[4]
                    .replace("Countertops(", " ")
                    .replace(")", "")}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Floors</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.flooring[0]}
                </div>
                <div className="font-medium">
                  {propertyData?.resoFacts.flooring[1]}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Bathroom Description</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.rooms[0].roomFeatures[0]}
                </div>
                <div className="font-medium">
                  Primary Bath: Tub/Shower Combo
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-light">Bedroom Description</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.interiorFeatures[1]}
                </div>
                <div className="font-medium">
                  {propertyData?.resoFacts.interiorFeatures[2]}
                </div>
                <div className="font-medium">
                  {propertyData?.resoFacts.interiorFeatures[3]}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Kitchen</div>
                <div className="font-medium">
                  {getToKitchen?.rooms[1].roomFeatures[0]}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Room Description</div>
                <div className="font-medium">
                  {dataNotFoundOnApi.roomDescription.roomDescription}
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-light">Cooling</div>
                <div className="font-medium">{getCoolingInfo?.factValue}</div>
              </TableCell>
              <TableCell>
                <div className="font-light">Heating</div>
                <div className="font-medium">{getHeatingInfo?.factValue}</div>
              </TableCell>
              <TableCell>
                <div className="font-light">Connections</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.laundryFeatures[0].replace(
                    "Hookup",
                    ""
                  )}
                </div>
                <div className="font-medium">
                  {propertyData?.resoFacts.laundryFeatures[1].replace(
                    "Hookup",
                    ""
                  )}
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-light">Compactor</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.appliances.includes("Compactor")
                    ? "YES"
                    : "No"}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Dish Washer</div>
                <div className="font-medium">
                  {" "}
                  {propertyData?.resoFacts.appliances.includes("Dish Washer")
                    ? "Yes"
                    : "No"}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Disposal</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.appliances.includes("Disposal")
                    ? "Yes"
                    : "No"}
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-light">Ice Maker</div>
                <div className="font-medium">
                  {" "}
                  {propertyData?.resoFacts.appliances.includes("Ice Maker")
                    ? "Yes"
                    : "No"}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Microwave</div>
                <div className="font-medium">
                  {" "}
                  {propertyData?.resoFacts.appliances.includes("Ice Maker")
                    ? "Yes"
                    : "No"}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">oven</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.appliances[0]}
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-light">Range</div>
                <div className="font-medium">
                  {" "}
                  {propertyData?.resoFacts.appliances[1]}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Energy Feature</div>
                <div className="font-medium">
                  {propertyData?.resoFacts.greenEnergyEfficient}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Interior</div>
                <div className="font-medium">
                  {dataNotFoundOnApi.roomDescription.interior}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
