import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";
import axios from "axios";
import "./styles.css";
import { interval } from "rxjs";
import { startWith, map, switchMap } from "rxjs/operators";
class App extends React.Component {
  state = {
    channelIds: [
      "UC_aEa8K-EOJ3D6gOs7HcyNg",
      "UC_gV70G_Y51LTa3qhu8KiEA",
      "UC_TVqp_SyG6j5hG-xVRy95A",
      "UC-8Q-hLdECwQmaWNwXitYDw",
      "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
      "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
      "UC-yXuc1__OzjwpsJPlxYUCQ",
      "UC0C-w0YjGpqDXGB8IHb662A",
      "UC0v-tlzsn0QZwJnkiaUSJVQ",
      "UC0VOyT2OCBKdQhF3BAbZ-1g",
      "UC1l7wYrva1qCH-wgqcHaaRg",
      "UC20vb-R_px4CguHzzBPhoyQ",
      "UC22nIfOTM7KLIQuFGMKzQbg",
      "UC295-Dw_tDNtZXFeAPAW6Aw",
      "UC2pmfLm7iq6Ov1UwYrWYkZA",
      "UC2xskkQVFEpLcGFnNSLQY0A",
      "UC3gNmTGu-TTbFPpfSs5kNkg",
      "UC3IZKseVpdzPSBaWxBxundA",
      "UC3jOd7GUMhpgJRBhiLzuLsg",
      "UC3KQ5GWANYF8lChqjZpXsQw",
      "UC3ZkCd7XtUREnjjt3cyY_gg",
      "UC4rlAVgAK0SGk-yTfe48Qpw",
      "UC56gTxNs4f9xZ7Pa2i5xNzg",
      "UC7_YxT-KID8kRbqZo7MyscQ",
      "UC8-Th83bH_thdKZDJCrn88g",
      "UC9CoOnJkIBMdeijd9qYoT_g",
      "UC9gFih9rw0zNCK3ZtoKQQyA",
      "UC9TO_oo4c_LrOiKNaY6aysA",
      "UCa10nxShhzNrCE1o2ZOPztg",
      "UCam8T03EOFBsNdR0thrFHdQ",
      "UCANLZYMidaCbLQFWXBC95Jg",
      "UCAW-NpUFkMyCNrvRSSGIvDQ",
      "UCaWd5_7JhbQBe4dknZhsHJg",
      "UCb2HGwORFBo94DmRx4oLzow",
      "UCbCmjCuTUZos6Inko4u57UQ",
      "UCBNs31xysxpAGMheg8OrngA",
      "UCBnZ16ahKA2DZ_T5W0FPUXg",
      "UCbTVTephX30ZhQF5zwFppBg",
      "UCBVjMGOIkavEAhyqpxJ73Dw",
      "UCbW18JZRgko_mOGm5er8Yzg",
      "UCcgqSM4YEo5vVQpqwN-MaNw",
      "UCECJDeK0MNapZbpaOzxrUPA",
      "UCEdvpU2pFRCVqU6yIPyTpMQ",
      "UCFFbwnve3yF62-tVXkTyHqg",
      "UCffDXn7ycAzwL2LDlbyWOTw",
      "UCfM3zsQsOnfWNUppiycmBuw",
      "UCG8rbF3g2AMX70yOd8vqIZg",
      "UCGnjeahCJW1AF34HBmQTJ-Q",
      "UChGJGhZ9SOOHvBB0Y4DOO_w",
      "UCHkj014U2CQ2Nv0UZeYpE_A",
      "UCIwFjwMjI0y7PDBVEO9-bkQ",
      "UCj0O6W8yDuLg3iraAXKgCrQ",
      "UCJ0uqCI0Vqr2Rrt1HseGirg",
      "UCJ5v_MCY6GNUBTO8-D3XoAg",
      "UCjIA3wwhi0QjSOXAZwOXbPA",
      "UCJrOtniJ0-NWz37R30urifQ",
      "UCK1i2UviaXLUNrZlAFpw_jA",
      "UCKqH_9mk1waLgBiL2vT5b9g",
      "UCKqx9r4mrFglauNBJc1L_eg",
      "UCLp8RBhQHu9wSsq62j_Md6A",
      "UClZkHt2kNIgyrTTPnSQV3SA",
      "UClZuKq2m0Qu-HkopkSBLpEw",
      "UCNUQK9mQoqi4yNXw2_Rj6SA",
      "UCoGDh1Xa3kUCpok24JN5DKA",
      "UCOpNcN46UbXVtpKMrmU4Abg",
      "UCOsyDsO5tIt-VZ1iwjdQmew",
      "UCoUM-UJ7rirJYP8CQ0EIaHA",
      "UCp0hYYBW6IMayGgR-WeoCvQ",
      "UCP6uH_XlsxrXwZQ4DlqbqPg",
      "UCpDJl2EmP7Oh90Vylx0dZtA",
      "UCpEhnqL0y41EpW2TvWAHD7Q",
      "UCPHXtOVmjvbP9OJihsd7gCg",
      "UCpko_-a4wgz2u_DgDgd9fqA",
      "UCPNxhDvTcytIdvwXWAm43cA",
      "UCppHT7SZKKvar4Oc9J4oljQ",
      "UCq-Fj5jknLsUf-MWSy4_brA",
      "UCqECaJ8Gagnn7YCbPEzWH6g",
      "UCRijo3ddMTht_IHyNSNXpNQ",
      "UCRv76wLBC73jiP7LX4C3l8Q",
      "UCRx3mKNUdl8QE06nEug7p6Q",
      "UCS5Oz6CHmeoF7vSad0qqXfw",
      "UCSAUGyc_xA8uYzaIVG6MESQ",
      "UCsPF3cApzCohxPp5oKdoWSQ",
      "UCsRM0YB_dabtEPGPTKo-gcw",
      "UCt-k6JwNWHMXDBGm9IYHdsg",
      "UCuHzBCaKmtaLcRAOoazhCPA",
      "UCV306eHqgo0LvBf3Mh36AHg",
      "UCV4xOVpbcV8SdueDCOxLXtQ",
      "UCV9_KinVpV-snHe3C3n1hvA",
      "UCVtFOytbRpEvzLjvqGG5gxQ",
      "UCXazgXDIYyWH-yXLAkcrFxw",
      "UCxoq-PAQeAdk_zyg8YS0JqA",
      "UCY30JRSgfhYXA6i6xX1erWg",
      "UCYiGq8XF7YQD00x7wAd62Zg",
      "UCYLNGLIzMhRTi6ZOLjAPSmw",
      "UCyoXW-Dse7fURq30EWl_CUA",
      "UCYvmuw-JtVrTZQ-7Y4kd63Q",
      "UCYWOjHweP2V-8kGKmmAmQJQ",
      "UCYzPXprvl5Y-Sf0g4vX-m6g",
      "UCZJ7m7EnCNodqnu5SAtg8eQ"
    ],
   res: null,
    firstTime: true,
    keys:[
      "AIzaSyCVPfbZQqM5tRrEapbizuX3Hi_ZZ5JUq5I",
      "AIzaSyAohUKGFdY7mUO0GYRwdJN6yBXnDbrw0oQ",
      "AIzaSyAWUmoQVXbXjFkhtOL7XY7hh--5yFThc5s"
    ]
  };
  // 0 index based   inclusive start and end
  getIds = (start, end) => {
    const arr1 = this.state.channelIds.filter((id, i) => {
      if (i >= start && i <= end) return id;
    });
    return arr1;
  };


  fetchDataStream = () => {
    let keyIndex = 0,
        {keys} = this.state,
        key;
    return interval(20000).pipe(
      startWith(0),
      switchMap(() => {
        const arrayOfChopedIds = [];
        arrayOfChopedIds.push(this.getIds(0, 24));
        arrayOfChopedIds.push(this.getIds(25, 49));
        arrayOfChopedIds.push(this.getIds(50, 74));
        arrayOfChopedIds.push(this.getIds(75, 100));
        // selecting the next API key 
        key = keys[keyIndex]
        keyIndex++;
        if(keyIndex+1> keys.length){
          keyIndex = 0;         
        }


        const URIs = arrayOfChopedIds.map(subarr => {
          const ids = subarr.toString();
          if (this.state.firstTime) {
            return encodeURI(
              `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${ids}&key=${
                key
              }`
            );
          } else {
            return encodeURI(
              `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ids}&key=${
               key
              }`
            );
          }
        });
        const reqs = URIs.map(uri => {
          return axios(uri.toString());
        });
        return Promise.all(reqs)
          .then(results => {
            let data = [];
            let infoArrs = results.map(item => item.data.items);

            infoArrs.forEach(item => {
              item.forEach(subItem => {
                data.push(subItem);
              });
            });
            return data;
          })
          .catch(e => {
            console.log(e);
          });
      }),
      map(res => {
        let unsortedRes = [];
        if (this.state.firstTime) {
          unsortedRes = res.map(i => {
            return {
              id: i.id,
              snippet: i.snippet,
              subCount: i.statistics.subscriberCount
            };
          });
          this.setState({ firstTime: false });
        } else {
          unsortedRes = res.map(i => {
            const matchedItem = this.state.res.find(item => {
              return item.id === i.id ? item : false;
            });

            const newItem = {
              id: matchedItem.id,
              snippet: matchedItem.snippet,
              subCount: i.statistics.subscriberCount
            };
            return newItem;
          });
        }

        const sortedRes = unsortedRes.sort((a, b) => {
          return b.subCount - a.subCount;
        });
        this.setState({
          res: sortedRes
        });

        return sortedRes;
      })
    );
  };

  componentWillMount() {
    this.sub = this.fetchDataStream().subscribe();
  }
  componentWillUnmount() {
    this.sub.unsubscribe();
  }
  render() {
    return (
      <div className="App">
        <Layout ids={this.state.channelIds} data={this.state.res} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
