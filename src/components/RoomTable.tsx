import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function RoomData() {
  return (
    <>
      <br />
      <br />
      <div className="grid gap-12">
        <div>
          <h2 className="text-3xl font-bold lg:text-4xl">Rooms</h2>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-light">Living</div>
                <div className="font-medium">...</div>
              </TableCell>
              <TableCell>
                <div className="font-light">Dining</div>
                <div className="font-medium">...</div>
              </TableCell>
              <TableCell>
                <div className="font-light">Primary Bedroom</div>
                <div className="font-medium">...</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-light">Bedroom</div>
                <div className="font-medium">...</div>
              </TableCell>
              <TableCell>
                <div className="font-light">Bedroom</div>
                <div className="font-medium">...</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
