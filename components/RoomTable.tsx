import { useRealty } from "@/app/providers/data-provider";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function RoomData() {
  const { dataNotFoundOnApi } = useRealty();
  return (
    <>
      <div className="grid gap-12">
        <div>
          <h2 className="text-3xl text-center font-bold lg:text-4xl">Rooms</h2>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-light">Living</div>
                <div className="font-medium">
                  {dataNotFoundOnApi.rooms.living}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Dining</div>
                <div className="font-medium">
                  {dataNotFoundOnApi.rooms.dining}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Primary Bedroom</div>
                <div className="font-medium">
                  {dataNotFoundOnApi.rooms.primaryBedroom}
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-light">Bedroom 1</div>
                <div className="font-medium">
                  {dataNotFoundOnApi.rooms.bedroom1}
                </div>
              </TableCell>
              <TableCell>
                <div className="font-light">Bedroom 2</div>
                <div className="font-medium">
                  {dataNotFoundOnApi.rooms.bedroom2}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
