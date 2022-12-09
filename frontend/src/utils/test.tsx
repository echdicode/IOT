import * as React from 'react';
import StaticMap from '@goongmaps/goong-map-react';
const Test = () =>  {
    return (
        <StaticMap
            goongApiAccessToken='6b1RCVh7AhMImwcK9Sai7Ump9lvQtJ2kYaM8E1S8'
            bearing={9}
            width="100vw"
            height="100vh"
            latitude={21.0508981207963}
            longitude={105.80422873372072}
            zoom={17}
        />

    );

}
export default Test;
