import React from "react";
import { State, Props } from "./interface";
import {Container} from './styles';
export default class UserInfo extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      headUrl: "http://112.74.165.209:3000/images/third.png",
      userID: 1,
      account: "792634614@qq.com",
      username: "Ashes Born"
    };
  }
  render() {
    return (
      <Container>
        <div style={{ flex: 1 }}>
          {/* <img className={styles.image} src={this.state.headUrl} /> */}
          <svg
            width="84px"
            height="84px"
            viewBox="0 0 300.000000 300.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M1790 2301 c-67 -14 -131 -50 -183 -103 -82 -84 -127 -194 -127 -315
0 -62 0 -63 -27 -63 -81 0 -230 37 -326 80 -112 50 -285 155 -332 201 -28 27
-54 49 -59 49 -5 0 -26 16 -47 35 -42 38 -73 45 -83 18 -15 -37 -19 -230 -6
-284 13 -57 43 -123 66 -150 8 -9 12 -24 8 -34 -7 -17 -42 -17 -86 0 -22 9
-24 -18 -4 -90 32 -121 112 -230 200 -272 20 -9 36 -20 36 -23 0 -10 -48 -30
-71 -30 -16 0 -18 -5 -13 -27 25 -102 140 -209 257 -238 51 -13 28 -37 -63
-69 -67 -23 -109 -30 -199 -34 -74 -3 -119 -10 -130 -18 -63 -53 -82 -74 -76
-84 20 -32 176 -90 375 -140 110 -28 319 -38 438 -21 105 15 260 70 347 122
35 22 67 39 70 39 15 0 147 115 220 191 137 144 257 352 270 467 25 218 46
372 56 399 7 21 39 57 90 99 75 62 107 99 96 111 -3 2 -37 -5 -77 -17 -107
-32 -111 -26 -36 60 38 44 66 84 66 98 0 12 -3 22 -7 22 -5 0 -54 -18 -111
-40 -56 -22 -109 -40 -117 -40 -9 0 -39 13 -68 30 -109 62 -255 91 -347 71z"
              />
            </g>
          </svg>
        </div>
        <div style={{ flex: 3, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "28px" }} className="userInfo">
            {this.state.username}{" "}
          </div>
          <div style={{ color: "#999" }} className="userInfo">
            {this.state.account}
          </div>
        </div>
      </Container>
    );
  }
}
