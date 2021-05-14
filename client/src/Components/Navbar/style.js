import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
    appBar: {
        margin: "30px 0",
        marginTop: "0px",
        marginBottom: "0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        backgroundColor: "black",
    },
    heading: {
        color: "rgba(0,183,255, 1)",
        textDecoration: "none",
    },
    // image: {
    //   marginLeft: "15px",
    //   marginRight: "30px",
    // },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        width: "400px",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
        width: "600px",
        marginRight: "20px",
    },
    dropbtn: {
        padding: "0px"
    },
    userName: {
        display: "flex",
        alignItems: "center",
        color: "red",
        width: "150px",
        marginLeft: "15px",
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    button:{
       marginRight:"20px"
    }
}));