import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#fff !important',
        height: 80,
    },
    right_link: {
        flexGrow: 1,
    },
    main: {
        minHeight:'80vh',
    },
    footer:{
        backgroundColor: '#2c106e',
        color: '#fff',
        height: 30,
        marginTop:10,
        padding:5,
        textAlign: 'center',
    },
    product: {
        fontSize:28,
        fontWeight: 900,
        marginTop:10,
        color: '#42c8f5'

    },
    sect: {
        marginTop: 10,
        marginBottom: 10,
    }
})

export default useStyles