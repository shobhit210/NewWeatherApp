import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    appParent: {
        backgroundColor: '#f6f6f8', 
        minHeight: '100vh', 
        display: 'flex'
    },
    sidebarBox: {
        position: 'sticky', 
        top: '0', 
        left: '0'
    },
    sidebarParent: {
        width: '320px', 
        backgroundColor: '#fff', 
        minHeight: '100vh',
        padding: '30px',
        position: 'sticky',
        top: '0',
        left: '0'
    },
    submitButtonParent: {
        display: 'flex', 
        justifyContent: 'center', 
    },
    submitButton: {
        backgroundColor: 'yellow !important', 
        color: 'black !important'
    },
    mainParent: { 
        width: '100%', 
        padding: '40px'
    },
    header: {
        display: 'flex', 
        justifyContent: 'space-between',
        padding: '20px 0',
        marginBottom: '20px'
    },
    card: {
        backgroundColor: '#fff !important', 
        height: '250px', 
        borderRadius: '15px !important',
        boxShadow: '4px 4px 32px 4px rgba(105, 108, 180, 0.16) !important',
        padding: '20px 20px 35px 20px',
        position: 'relative'
    },
    cardHeaderText: {
        color: '#d3d3d3', 
        fontSize: '18px'
    },
    cardParent: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        width: '100%', 
        height: '100%'
    },
    cardBody: {
        fontSize: '55px'
    },
    cardFooter: {
        fontSize: '20px'
    }
}));

export default useStyles