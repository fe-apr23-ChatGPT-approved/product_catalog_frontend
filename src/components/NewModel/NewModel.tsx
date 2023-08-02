/* eslint-disable max-len */
import React from 'react';

import style from './NewModel.module.scss';
import gird from '../../utils/grid.module.scss';

export const NewModel: React.FC = () => (
  <div className={`${gird.grid__item} ${gird['grid__item--tablet--2-11']} ${gird['grid__item--desktop--2-23']}`}>
    <img
      className={`${style.new_model__photo} ${style.new_model__photo_mobile}`}
      src="https://s3-alpha-sig.figma.com/img/344a/35d3/d4580db3ba8a1b2575c558d64ab02a7b?Expires=1691366400&Signature=jBJkyxNzLDbBWvfXRPq3~ZXl96i0xsOkdc0nGEtf6RCy8wqrt98wCDhd-VXis6~SFEZCPMD1z6LjODt-i8K27NfG0-KkIRiqTor3L40vUx-kunBgINlOjM0rP9Eqi0RTPi5p61oXlNcb3UBxNI-xkyFpBtf8bbVUpS2iGXev9S3h16XEyGhsrw6gxQksoWp75m4-Zj3Fq6nzatjVnv8LYywbiPbAEmMpy33kHVa8p-NQIRV-7C9q8JdC0k5oJFTGPtB83RfIR~~GKw~RLftZPaStWJqGtc6yRkRfVV0LPLFClvpyqQIQnwtw0uNMqUY3Tv3QDyJtVeaVY7kq4gu16w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      alt="Now available in our store!"
    />
    <img
      className={`${style.new_model__photo} ${style.new_model__photo_tableAndDesktop}`}
      src="https://s3-alpha-sig.figma.com/img/7d29/6526/af22f754728ae4cdd11e8cf94439d598?Expires=1691366400&Signature=gmezOGe5WxDg2iiI97dXADPUpp-AXejIJgqULi0spGalHflqEdLuUNtGowWUWinKyMnletRkO2MujXxpqVNbL4JXxtidf2wnDYeTgrJkDGyGJwDYpz70imQ2HFM7yj7ntwqNaMw0EL-1eOVd7WeReFQ4qpk8~ao9tmT~1ZdOYn6KgslvoxU1i6t8~NUBtIIheJ20H-wZDLjPVPClDDd~R-KNLH9upsOqP0DqoIxGlS2QcqywIYYZNkGuLt0y2Jf9H7tp8gWtUZWdzmV5ZNxLGGihQ5oHYaNsaL9uCoBGlOI5NFX4nyAikWUWskVcCrZo~Qc3xPkZGiU31zJ18h1I8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      alt="Now available in our store!"
    />
  </div>
);
