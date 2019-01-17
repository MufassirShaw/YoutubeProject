import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";
import axios from "axios";
import "./styles.css";

class App extends React.Component {
  state = {
    channelIds: [
      "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
      "UCOpNcN46UbXVtpKMrmU4Abg",
      "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
      "UCq-Fj5jknLsUf-MWSy4_brA",
      "UC295-Dw_tDNtZXFeAPAW6Aw",
      "UCffDXn7ycAzwL2LDlbyWOTw",
      "UCIwFjwMjI0y7PDBVEO9-bkQ",
      "UCpEhnqL0y41EpW2TvWAHD7Q",
      "UCJ5v_MCY6GNUBTO8-D3XoAg",
      "UCRijo3ddMTht_IHyNSNXpNQ",
      "UC0C-w0YjGpqDXGB8IHb662A",
      "UCfM3zsQsOnfWNUppiycmBuw",
      "UCZJ7m7EnCNodqnu5SAtg8eQ",
      "UCHkj014U2CQ2Nv0UZeYpE_A",
      "UC3KQ5GWANYF8lChqjZpXsQw",
      "UCYWOjHweP2V-8kGKmmAmQJQ",
      "UCXazgXDIYyWH-yXLAkcrFxw",
      "UCbCmjCuTUZos6Inko4u57UQ",
      "UCqECaJ8Gagnn7YCbPEzWH6g",
      "UCYvmuw-JtVrTZQ-7Y4kd63Q",
      "UCYiGq8XF7YQD00x7wAd62Zg",
      "UCV4xOVpbcV8SdueDCOxLXtQ",
      "UCcgqSM4YEo5vVQpqwN-MaNw",
      "UC9CoOnJkIBMdeijd9qYoT_g",
      "UCp0hYYBW6IMayGgR-WeoCvQ",
      "UCV306eHqgo0LvBf3Mh36AHg",
      "UCFFbwnve3yF62-tVXkTyHqg",
      "UCb2HGwORFBo94DmRx4oLzow",
      "UCANLZYMidaCbLQFWXBC95Jg",
      "UC-8Q-hLdECwQmaWNwXitYDw",
      "UC20vb-R_px4CguHzzBPhoyQ",
      "UC2xskkQVFEpLcGFnNSLQY0A",
      "UCam8T03EOFBsNdR0thrFHdQ",
      "UCa10nxShhzNrCE1o2ZOPztg",
      "UCYLNGLIzMhRTi6ZOLjAPSmw",
      "UCpDJl2EmP7Oh90Vylx0dZtA",
      "UCEdvpU2pFRCVqU6yIPyTpMQ",
      "UCKqH_9mk1waLgBiL2vT5b9g",
      "UCY30JRSgfhYXA6i6xX1erWg",
      "UCoUM-UJ7rirJYP8CQ0EIaHA",
      "UCxoq-PAQeAdk_zyg8YS0JqA",
      "UCbW18JZRgko_mOGm5er8Yzg",
      "UCBNs31xysxpAGMheg8OrngA",
      "UCppHT7SZKKvar4Oc9J4oljQ",
      "UCBVjMGOIkavEAhyqpxJ73Dw",
      "UC7_YxT-KID8kRbqZo7MyscQ",
      "UCjIA3wwhi0QjSOXAZwOXbPA",
      "UC4rlAVgAK0SGk-yTfe48Qpw",
      "UC_gV70G_Y51LTa3qhu8KiEA",
      "UC56gTxNs4f9xZ7Pa2i5xNzg",
      "UClZkHt2kNIgyrTTPnSQV3SA",
      "UCbTVTephX30ZhQF5zwFppBg",
      "UCBnZ16ahKA2DZ_T5W0FPUXg",
      "UC3gNmTGu-TTbFPpfSs5kNkg",
      "UCKqx9r4mrFglauNBJc1L_eg",
      "UCSAUGyc_xA8uYzaIVG6MESQ",
      "UCYzPXprvl5Y-Sf0g4vX-m6g",
      "UCAW-NpUFkMyCNrvRSSGIvDQ",
      "UCS5Oz6CHmeoF7vSad0qqXfw",
      "UCECJDeK0MNapZbpaOzxrUPA",
      "UCj0O6W8yDuLg3iraAXKgCrQ",
      "UCNUQK9mQoqi4yNXw2_Rj6SA",
      "UCRx3mKNUdl8QE06nEug7p6Q",
      "UCJrOtniJ0-NWz37R30urifQ",
      "UC3ZkCd7XtUREnjjt3cyY_gg",
      "UC22nIfOTM7KLIQuFGMKzQbg",
      "UCPNxhDvTcytIdvwXWAm43cA",
      "UC_aEa8K-EOJ3D6gOs7HcyNg",
      // "UC3IZKseVpdzPSBaWxBxundA",
      // "UCVtFOytbRpEvzLjvqGG5gxQ",
      // "UCV9_KinVpV-snHe3C3n1hvA",
      // "UCaWd5_7JhbQBe4dknZhsHJg",
      // "UCaWd5_7JhbQBe4dknZhsHJg",
      // "UCt-k6JwNWHMXDBGm9IYHdsg",
      // "UC8-Th83bH_thdKZDJCrn88g",
      // "UCGnjeahCJW1AF34HBmQTJ-Q",
      // "UCoGDh1Xa3kUCpok24JN5DKA",
      // "UCoGDh1Xa3kUCpok24JN5DKA",
      // "UCyoXW-Dse7fURq30EWl_CUA",
      // "UC9gFih9rw0zNCK3ZtoKQQyA",
      // "UC0VOyT2OCBKdQhF3BAbZ-1g",
      // "UCRv76wLBC73jiP7LX4C3l8Q",
      // "UCP6uH_XlsxrXwZQ4DlqbqPg",
      // "UCG8rbF3g2AMX70yOd8vqIZg",
      // "UCsRM0YB_dabtEPGPTKo-gcw",
      // "UC-yXuc1__OzjwpsJPlxYUCQ",
      // "UCxoq-PAQeAdk_zyg8YS0JqA",
      // "UCK1i2UviaXLUNrZlAFpw_jA",
      // "UC_TVqp_SyG6j5hG-xVRy95A",
      // "UClZuKq2m0Qu-HkopkSBLpEw",
      // "UC0v-tlzsn0QZwJnkiaUSJVQ",
      // "UCpko_-a4wgz2u_DgDgd9fqA",
      // "UC9TO_oo4c_LrOiKNaY6aysA",
      // "UC2pmfLm7iq6Ov1UwYrWYkZA",
      // "UCPHXtOVmjvbP9OJihsd7gCg",
      // "UC3jOd7GUMhpgJRBhiLzuLsg",
      // "UChGJGhZ9SOOHvBB0Y4DOO_w",
      // "UCuHzBCaKmtaLcRAOoazhCPA",
      // "UCJ0uqCI0Vqr2Rrt1HseGirg",
      // "UCsPF3cApzCohxPp5oKdoWSQ"
    ],
    APIKey: "AIzaSyC0QYUSKEwHaRVz4NKpT1SLbkVMT1o5cM8"
  };

  fetchData = id => {
    return axios(
        ` https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${id}&key=${
        this.state.APIKey
      }`
      )
      .then(res => {
        return res.data.items[0];
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    console.log("No of Ids are", this.state.channelIds.length);
    return ( 
      <div className = "App" >
        <Layout ids = {this.state.channelIds} getData = {this.fetchData}/> 
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render( < App / > , rootElement);