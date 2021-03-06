import React, { useEffect, useState } from "react";
import { Paper, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useAuth from "../../../../Authentication/Hooks/useAuth";
import MyAppointmentData from "./MyAppointmentData";
import Calendar from "../../../Appointment/Calendar/Calendar";
import "./MyAppointment.css";

const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "patientName", label: "Patient Name", minWidth: 150 },
  { id: "doctorName", label: "Doctor Name", minWidth: 150 },
  { id: "category", label: "Problem", minWidth: 80 },
  { id: "date", label: "Date", minWidth: 60 },
  { id: "time", label: "Time", minWidth: 60 },
  // { id: 'status', label: 'Status', minWidth: 50, },
  { id: "payment", label: "Payment", minWidth: 150 },
  { id: "meetlink", label: "Meetlink", minWidth: 50 },
  { id: "prescription", label: "Prescription", minWidth: 50 },
  { id: "delete", label: "Delete" },
];

const MyAppointment = () => {
  // const [date, setDate] = useState(new Date());

  const { user } = useAuth();
  // console.log(user);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [appointments, setAppointments] = useState([]);
  // console.log(appointments)
  const email = localStorage.getItem("email");

  // console.log(email)

  useEffect(() => {
    const url = `https://mysterious-bastion-18790.herokuapp.com/appointment/${email}`;
    fetch(url)
      .then((res) => res.json())
      // .then(data => console.log(data))
      .then((data) => setAppointments(data));
  }, [email]);

  return (
    <>
      {appointments.length === 0 ? (
        <div>
          <h1>Hello!!! {user.displayName}</h1>
          <h1>Please book an appointment</h1>
        </div>
      ) : (
        <>
          <div className="notice-banner"></div>
          <div className="table-name">My Appointment</div>

          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            {/* <div><Calendar
                                date={date}
                                setDate={setDate}
                            ></Calendar></div> */}

            <TableContainer sx={{ maxHeight: 550 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          fontSize: "14px",
                          textTransform: "uppercase",
                          fontWeight: "600",
                          backgroundColor: "#0dc276",
                          color: "#fff",
                          minWidth: column.minWidth,
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {appointments
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((appointment) => {
                      return (
                        <MyAppointmentData
                          key={appointment.id}
                          appointment={appointment}
                        ></MyAppointmentData>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={appointments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
      )}
    </>
  );
};

export default MyAppointment;
