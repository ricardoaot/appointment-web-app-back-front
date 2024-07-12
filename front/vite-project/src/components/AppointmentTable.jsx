'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function AppointmentTable({appointments, handleCancelOnClick}) {
    return (
        <Table>
          <TableCaption>A list of your recent appointments.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={'appointmentTableRow_' + appointment.appointmentId}>
                <TableCell className="font-medium">
                    <Link to={`/appointment/${appointment.appointmentId}`}> 
                        View Detail ID:{appointment.appointmentId}
                    </Link>
                </TableCell>
                <TableCell className="text-left">{appointment.title}</TableCell>
                <TableCell>{appointment.date + ' - ' + appointment.time}</TableCell>
                <TableCell className="text-center">{appointment.status}</TableCell>
                <TableCell className="text-center flex items-center justify-center gap-4">
                    <Button 
                        variant="destructive" onClick={() => handleCancelOnClick(appointment.appointmentId)}
                    >Cancel</Button>
                    <Button variant="default">View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell className="text-right" colSpan={4}>Total</TableCell>
              <TableCell className="text-center">{appointments.length+' appointments'}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
  
    )
  }
  