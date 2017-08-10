/**
 * Created by Daniel Martin on 07/11/2017
 */
import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    checkpointNameContainer: {
        flex: 1,
        height: 40,
    },
    checkpointName: {
        textAlign: 'center',
        display: 'flex',
        height: 150,
        paddingTop: 5,
        flex: 1,
        fontSize: 18,
    },
    checkpointDescriptionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 3,
    },
    checkpointDescriptionLabel: {
        fontSize: 15,
    },
    queueRows: {
        flexDirection: 'row',

    },
    preScreeningLabel: {
        color: 'black',
        fontSize: 15,
    },


    container: {
        paddingBottom: Metrics.baseMargin,
        padding:10,
        backgroundColor: '#f3f3f3'
    },
    logo: {
        marginTop: Metrics.doubleSection,
        height: Metrics.images.logo,
        width: Metrics.images.logo,
        resizeMode: 'contain'
    },
    box:{
        flex: 1,
        width:150,
        height:150,
        backgroundColor: Colors.boxColor,
        paddingTop: 20,
        alignItems: 'center',
        margin:10
    },
    boxTitle:{
        fontSize: 14,
        color: Colors.frost,
        fontWeight: 'bold',
        paddingTop:20
    },
    boxRow: {
        flexDirection:'row',
        height: 100,
    },
    centered: {
        alignItems: 'center'
    },

    mainPanel:{
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 1,
        borderColor: 'red',
        // flex: 5,
        width: '100%',
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        paddingBottom: 20,
    },

    directionPanel:{
        flexDirection:'row',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 3,
        height: 40,
    },

    panelItems:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    panelSubtitle:{
        fontSize: 16,
        color:"#737373"
    },

    directionPanelSubtitle:{
        display: "flex",
        fontSize: 12,
        color:"#033C56",

    },

    panelTitle:{
        fontSize: 13,
        paddingBottom: 8,
        paddingTop: 0,
        color:"#737373",
        alignContent:"space-around"
    },

    arrivalTime:{
        fontWeight: "bold",
        fontSize: 16,
        color: "#66BB6A"

    },

    panelInfo:{
        fontSize: 18
    },

    cardTitle:{
        fontSize: 15,
        fontWeight:'bold',
        marginBottom: 7,
        color:"#737373"
    },

    cardDetails:{
        fontSize: 12,
        marginBottom: 3,
        color:"#737373"
    },

    screeningCard: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 3,
        paddingBottom:15,
        marginRight: 15

    },
    seeAll:{
        fontSize: 13,
        fontWeight:"bold",
        color:"#737373",
        justifyContent: 'space-between',

    }

})
