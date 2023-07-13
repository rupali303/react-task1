import React, { useState } from 'react';
import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const [leaveApplications, setLeaveApplications] = useState([]);
    const [leaveReason, setLeaveReason] = useState('');
    const [leaveDateFrom, setLeaveDateFrom] = useState('');
    const [leaveDateTo, setLeaveDateTo] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Signup button clicked');
    };

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login button clicked');
        setIsLogged(true);
    };

    const handleLogout = () => {
        setIsLogged(false);
    };

    const handleLeaveReasonChange = (event) => {
        setLeaveReason(event.target.value);
    };

    const handleLeaveDateFromChange = (event) => {
        setLeaveDateFrom(event.target.value);
    };

    const handleLeaveDateToChange = (event) => {
        setLeaveDateTo(event.target.value);
    };

    const handleLeaveApplication = () => {
        // Handle leave application logic here
        const newLeaveApplication = {
            id: leaveApplications.length + 1,
            staffName: username,
            reason: leaveReason,
            dateFrom: leaveDateFrom,
            dateTo: leaveDateTo,
            status: 'Pending'
        };
        setLeaveApplications([...leaveApplications, newLeaveApplication]);
        setLeaveReason('');
        setLeaveDateFrom('');
        setLeaveDateTo('');
    };

    const handleApproveLeave = (id) => {
        // Handle leave approval logic here
        const updatedLeaveApplications = leaveApplications.map((application) => {
            if (application.id === id) {
                return { ...application, status: 'Approved' };
            }
            return application;
        });
        setLeaveApplications(updatedLeaveApplications);
    };

    const handleRejectLeave = (id) => {
        // Handle leave rejection logic here
        const updatedLeaveApplications = leaveApplications.map((application) => {
            if (application.id === id) {
                return { ...application, status: 'Rejected' };
            }
            return application;
        });
        setLeaveApplications(updatedLeaveApplications);
    };

    const renderHomePage = () => (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Leave Management
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <TextField
                    label="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Role</InputLabel>
                <Select value={role} onChange={handleRoleChange}>
                    <MenuItem value="HOD">HOD</MenuItem>
                    <MenuItem value="Staff">Staff</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSignup}
                sx={{ marginBottom: 2 }}
            >
                Signup
            </Button>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
            >
                Login
            </Button>
        </Container>
    );

    const renderHodDashboard = () => (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                HOD Dashboard
            </Typography>
            <Typography variant="h5" gutterBottom>
                Staff leave applications:
            </Typography>
            {leaveApplications.map((application) => (
                <div key={application.id} style={{ marginBottom: '16px' }}>
                    <Typography variant="body1" gutterBottom>
                        Staff Name: {application.staffName}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Leave Reason: {application.reason}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Status: {application.status}
                    </Typography>
                    {application.status === 'Pending' && (
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleApproveLeave(application.id)}
                            >
                                Approve
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleRejectLeave(application.id)}
                            >
                                Reject
                            </Button>
                        </div>
                    )}
                </div>
            ))}
            <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleLogout}
            >
                Logout
            </Button>
        </Container>
    );

    const renderStaffDashboard = () => (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Staff Dashboard
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <TextField
                    label="Leave Reason"
                    value={leaveReason}
                    onChange={handleLeaveReasonChange}
                />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <TextField
                    label="Date From"
                    type="date"
                    value={leaveDateFrom}
                    onChange={handleLeaveDateFromChange}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <TextField
                    label="Date To"
                    type="date"
                    value={leaveDateTo}
                    onChange={handleLeaveDateToChange}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLeaveApplication}
                sx={{ marginBottom: 2 }}
            >
                Apply
            </Button>
            <Typography variant="body1" gutterBottom>
                Leave Status:
            </Typography>
            {leaveApplications.map((application) => (
                <div key={application.id} style={{ marginBottom: '16px' }}>
                    {application.staffName === username && (
                        <Typography variant="body1" gutterBottom>
                            Status: {application.status}
                        </Typography>
                    )}
                </div>
            ))}
            <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleLogout}
            >
                Logout
            </Button>
        </Container>
    );

    return (
        <div>
            {isLogged ? (
                role === 'HOD' ? (
                    renderHodDashboard()
                ) : (
                    renderStaffDashboard()
                )
            ) : (
                renderHomePage()
            )}
        </div>
    );
};

export default Dashboard;
