import React from "react";
import PropTypes from "prop-types";
import { FooterStyles } from './Footer.css'
import { Typography, Grid } from "@material-ui/core";

const Footer = props => {

  const classes = FooterStyles();

  return (
    <footer className={classes.cusFooter} align="justify">
      <Grid container spacing={4} style={{ marginTop: "2px"}} >
          <Grid item xs={4} >
            <Typography className={classes.cusOwner} variant="caption" display="block" gutterBottom>
              {/* <a href="/self_service/app/privacy"> Privacy Policy </a> */}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.cusOwner} variant="caption" display="block" gutterBottom>
              Brought you by JMaaS Team
            </Typography>
          </Grid>
          <Grid item xs={4}>
              <Grid container spacing={8} >
                <Grid item xs={4} >
                  <Typography className={classes.cusOwner} variant="caption" display="block" gutterBottom>
                    <a href="mailto:CIBEE.Pilot-Build-IaaS@de.bosch.com"> Contact us </a>
                  </Typography>
                </Grid>
                <Grid item xs={4} >
                <Typography className={classes.cusOwner} variant="caption" display="block" gutterBottom>
                  <a href="https://inside-docupedia.bosch.com/confluence/display/cines4info/JMaaS+-+Self-Service+Portal" target="_blank"> V_1.0.0 </a>
                </Typography>
                </Grid>
          </Grid>
      </Grid>
      </Grid>
     
     
      <img
        className={classes.topBrand}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADc4AAABFCAMAAAD+ImTqAAABfVBMVEWRJDivJzcmQIREsnExpsHJIip6PY4ne7EpfbICp7EwRIw1kbuyICcfU5xNs3TUIy0do0pWtXWyLVMyQYc0rW0dXqTZIimXNW8HqG03osM2o8UwoV0CpKUZq2+vKkExiLcYqcUCpYwOqslmunQCpqYkoFIhRpXaIiiQIzcDp2qvK0I1k0sdZKgCrM0zpsk0k0t/vnh/vncCq8wgRo41pskiQpIDpmw2psgsg7ciRIshRY0dZakhRYwqgbYEqGkrgrYrgrevICQeR48rQ4YypcokQ4omQ4UwQoc5SppKR5ooQ4UyQocdSJAeSI8zk0o0Qoc7SppASZpFSJpDSJpMRppTRZlYRJldQ5ljQpllQZkuQ4ZsQJk1Qog+SZpHR5pORppdtXhaRJlfQ5kcZKc2S5pQRppSRZklQ4VcQ5ktQ4ZhQpk3Qog8SZpCSJpWRZlVRZliQplqQZlpQZlnQZkdSZBXRJloQZk3p8iEO4McSZGDPIWEO4ECqb5yvHYEpmsIMZodAAAAJ3RSTlPlyPLx2sfz59P88+vi3fja/vzh9fLs7fX07/n38/Dn8+T39P364O5Cs3h8AAAQFklEQVR42uzdeVNSURjHca+4TIg6iEmaaeWMdC9LcwE3ChwnoLI/2lesLGzfa1rGqNdecFnugcsVBuWc55zf511855zneQbOgd2AISJtqzuTIei/md81v6r2Rwp1XyxfLT8qvlkeMh4wPlveVj23uc94XfPM5h7je8VHyyfLXcbLuhcNT+3uMK46eWJ3i3Gb8cFyk/HY7r3lBuOKkz2L913Djt11xrUWlx09YrypudTedot8G69sNlI2F3uxwUdOLCuHbrxI3WiamLFsn8WElWyxdjqqmjMZcejC8Jhym9h1dTIMDcg5GXNuJgQcBJFzHHPOQjLn8ikLok7YnFsuEncBOSdLypXFhqKKif/NiEEXyilTbp5dV+fDgJyjlXNd9pwvBDxMtuRcATnX55wL9JpzrP7k3GDKIkfV5fhbOXxF6pBz9FIulmxLuZwrZUSgi+aEKTf/rpuJMCDnqOXcgm+rC8Mh4KIp5/aRc33POa9kOYeoQ86p+Tq37phzCrVc0s2acjl3LNMl+VOu4o8pN9eemw4Dco5azhkaco6AqabXuRHkHHKu85yTMOo6qzoKOXc8Qhy1nEvPZZsg5RR+nYvPZ7qgSMqVTZtym8DoHHJOspwzfMg58U0i5zjmnIXi7Fw15xB1yLkjQ+51js05pFyToXhUKaWOc06hlNN1tYfn/GFAzhHMOQ05R0AQOcc75wIEcy6X6h6irr85Nx4hDjknT8v9N3s2qpRSR4stFUu5slVTbm6fLT1hQM4RzDlDw50C8U2xs3MF5Fzfc85LL+fyKYbkT3W5Vsi5o0bxdS6WLUPKOfup2KWC0sGLLRVsubIlU25+jM4h52TLuQXcKRDfDHKOY85Z6OXcYCJVplTUMVWHnDty9F7n1rNZpJwL1XIu40rRlNN1+YfnPDhTgJyTLee6eJ4LAS9Be86NIOc45FyAYM5VIOpEzrnlCG3UXuc215Fy2IVS47rYUuGU03X5TxV4cKYAOSddzhk+nJ0T3iRyjnfOecnmnLJVRyHnVooR2ojlXHoRLYeca5jPOFI85XRd/uE5jM4h5yTMOQ2bUMQXtOVcATnHIef2qOccok7InIvQRu11Lr2IlEPOVTkvtkTKWfym3Pw4U4Ccky7nDA05J7ypRs7tI+e45FyA2t25XKICUVchas5Rv1SgZM7FhJXs1axSlwpaFlui5aoUPlWA0TnkHN2cW0DOCW+mkXMjyDkuOecllnP5VKICUWeDnFM958aQcq7mVLpUEC+tZhqQcjbqDs9hdA45RzjnDA05J7wgcg4511XObSeqUHXNRMo56qst1cq5mLCSzrDa0oVtEwpSron8w3NLOFOAnJMw5wwfzs6JbriecwXkHJec29shlXP56ugcoq4d5BxyDinXLKbU8Fwl55ByziZMufkxOoeckzDnNJydEx5yjnfOBWitQqnmHKLuAMi5noxu0jKGlMMulLp5pFw7qg7P+cOAnKOcc4aGOwWi+8feve2mDQQBGJZVKZUBgQJVEBGiinJR1W1pzcFOcxBRLnPTB8hN34KKhDx7CYYooTbgBrM7s///Fp92Z6a+4NwEzhniXMkBzoE6OKeac2dlKAfnFvV6bSyXlavDc5wpgHPCOdeBc7ZXW3DuAM4Z4Nw8WZxbLrZEddu3d87JvyMujHOjFpaDc8v8EyiX3WOou1NG5+CcRs4FHptQbK8J5wxzriGKc5f9eaAud/vknPg74sI4d3UM5dbXcmi1pR9Bueyid6HqflQZnYNzGjnXqcA5y6snnLuDc6Y4V5LEudt+Eqj73+CcQs6NjqEclwqW+VAuOzeH5zhTAOfEcy7w4JzlHc05N4FzcG4d51ZG56xC3blw1A13n/jDc8I4d9aVTLnuoPDi2KFLBT6WW1Pk4vAco3NwTj7nggp3CiyvOf9rCedMcC7Jec45+1QH57RwTq7lBsUXP+XQ8FwbymUUzZuGqpvy1xLO6eScx50Cy6vNNHcP5wxyrgHnnEbdcPeJX20pjHMfodwayjnGuV4byqUUPfch1F3K8Nz3LwTnxHNuk+c+kenueZ0zy7mSIM5lzM6BOjgH56Dcv5RzkHMPJ1BupehV7g3PMToH51RwrsOdAsurP21CgXNGOJckiHPn/TXZhjohQ3XDWXBOMueuylhupXilcav3zZH8CMq9LFpJ/fBclTMFcE4n5wKPTSh2V5ttQoFzJjnXEMO5rR7nbFOd7U91w90n/vCcLM6NylDuZXFK7qy29LHcc1Fqp6HqpozOwTmlnAsqcM7umn8O4JxJzpXEcC7H6ByoM8k54ZcKLmRx7qoM5ZbFGY2dWW3pQ7lUyrk7PHfI6BycU8I5D87ZXR3OGeNc0i845zDqhoX0VXSyODcqQ7k0yrk5PNeGcq8p59xvy3ecKYBzSjkXeHDO6o7u7+CcUc418nIuvT1w7mZeP2egbt+cE36pQNjr3KiM5eJZcG5Wrw3lNhXqrsroHJzTyrkOZ+fsrg7nzHKuJIVztzdJqO4SzhWXxNe5rrUNCi6xHJxb9HCC5Tb1O1TdlNE5OKeVc0EFzlkdnINz23HuZ+I4ULcMzhXSxftrSY1aXUsbFF+8XWNXOOdHUG5Dj9pPFVQ5UwDnlHLO43XO7ppwjs+WeT5bgrrXwbldJ4tz13ZyblB4cY5ajqy29D9DuShieI7ROTinkHOdCrNzVlebwDmznJOz2TKxm1rUvUl1cG5XXQh7nbOQc4Pii/M1doNzPR/KOT88d8hfSzink3NstrS8+oTNlhwqyMU55aq7fEuWcO4ve3e8mzQUxXE8HXGxiBBgASHInBpJI5aKcEu2GK3J/GOB+AL+5x/7gweAwPTZbUuGrCAUOnrvOff3fYtPzj33tEn39CulBnVbpXrHzz0gTS4VNLSinCUOKu/w7oHncKYAnOPCuSbOiCveHJzDGfG9OAfU7QycSxC1x5YD11al3lpKUE6fv1C6DX0sJw7upcO7PFbnwDmOnDO8LeVaSHaFGTgnl3M/yHDuZgE1oC5m8jj3rk06WtO5c1uNetGUoZw+nLu7AOV298LhXQZnCsA5hpwzvK21kOyqs9kMnJPIueyYDOduR6PQaPRUp/BSXf8YPW+TjtZ0TgXO9dZSynLB15ZdHTIFKBcjh3fF1dW5DtoUOEePcznPD19bqltlDs7J5VyZEOeuR0FkUafkqK7vB85hOseYcmG1rg6ZoByW51Y9V3zfQeAcC84Fwzksz6lcaepz7hSck8e5MSHOnYweBNTtHTgXoytSnPv8zI6dppTzm9RfdzXItBgnImF5bvdry0wHgXMsONf0wDnFq4JzcjmXJcw5oO7ANnAOdwqWUZvOxeUcQcu5j9irrgY1LKaJSFiei8e5sw4C51hwzgDnFK8wBefAuUSco/3+Uv5SXd8PnFuJ2nTuSxzOEaRcz33UbC2W51hyTkTC8tyOPq6cKUDgHAvOGR44p3ilkHMzcE4a534y4Rxp1Mkc1fX9wLnVMJ3jRrkwHTh3d2ExSxynjMO65SXxfAeBcyw4l/OCcKlA4ebgnFzOZceUOHczWg/vL+9TiHO/2pSjNZ0bbOMcKKcV50xhcUpEwvJc3DJ4awnOseKc4QXhUoHCPZkuOHcKzoFz2zm36NNw6GsNqNuSEpxr044U5/4/nSNoOXcZOHdA5h+LSyISluf2KYMzBeAcJ841F8M5XCpQuCo4J5lzZVqcux4uWlEd0/eXlwmTyDnyV8SJTedq9oYIUq7nHrHJpKbB15ZvLRaJ4/fbYd0brM6Bc5w4FwznsDyndJU5OCeZc+MEnIuUBudOhmHaoC6p6qRwjvqdAn86N6BU3Y4Eym30nAZfWzLgnEinM4d3RZwpAOf4cK7pgXOqV5r6zYLAOTmcyxLnXBDeX+4KnNuvK3COF+W04Rzxjy1FWumyPIfVOXCOBecMcE75quCcZM6VWXAOqIsTOBczatM5176PoOXctNJhec6k/LGlSDFdluewOgfOceCc4YFzqleYLjl3Cs5J4dx4TGt3bhPnNHt/eZkwcI4b5+wwgpTbbjlwbt8+kP3YUqSdHstzxQ4C5xhwLucF4VKBypXAOcmcy1Lj3PdhGFCXVHXH5Bz5s3O0OHdu26AcOBdkWgQTMuK/PJfH6hw4x4RzhhezSgvJar7gXBg4J4NzZWqcu/02XAvvLw8OnAPnmL+w/Nek1uXe3/buYCeNKArAcEZTFkh1hBQiC7swtHFhwBQuJjQxs3HRGJ6gi+5csJ0ECfXdOwOkoR3RwZi555z7/2/x5d5zjrpNKM5XYQzP8dcSzhng3HmyiksFkvvwCOc8c+6nOs5tnudA3buhbrSOs3Nwzuqz3Kau+UsFqjjnfGZ/eO6YMwVwzgbn8sc5hueE14FznjlXn6nj3MF9If5frpPEuYnuNHHu9gjKlcz4asur33o45/x3MTBdNjx33Cc4p55zUQLnxNdebnOuBueq51xLIefSNM1oBup2JoBzXybK08S5myMoVyr7w3NKFls6GdkfnuNMAZwzwLkGnJNf8xHOeeZc5jhlhwpyzm26/xv/L4t55dzHifIC41xBXgYpFwDnNCy2dHKyPzzH6Byc08+5KMljtaXsOlucy4JzlXOurppzm0DdC8E5OOedckIsNx7PjXNO+mJLJyvzw3OcKYBz+jl33oBz8jtZwjnPnGsp5NxdWoz/ly8H5+Bc8JTLMr/aUjDnnMCMD889caYAzunnXJTkcalAds3/OFeDc1VzbjbTNzv38C0txP/LUsE5m5w7g3IlKJd3Zny1pdRNKE5m1ofn+GsJ59Rzbq05LhXIrr2Ec545V1fJuR/pKlD3xqrg3KeJ8jRx7rYr0XJjKc23s73aUuRiSyc3678te32Cc2Fxjl0oXmrCOTj3Fs4dLLLSZ2Kobo/gnBnO3XSlUU6M5eZZAXFO3GJLJ7yB6S7gHJzTzrkogXMK6mxxbh2cq5hzM72c25SmQp7qNA/VjVZxdk4t58ZQrgTl8ozvQhG12NIp6NfAcNeHcZ/gnG7ONeCcgtpLOOeZc3X9nBOGOp1PdaMRnFPNOTmWGwtpnhUi5y6l5HRk+lTBdS9meA7O6eZclOSx2lJ4zSLnanAOzpWYnVusAnVyOaf+irg9zg0LhWc565y7kjE65/Rke3gujvltCedUc+482buvVH0dOOebcy2dnLtLFztiqE4I59QvtlTFuc9QrgzlArhU4J9zTlkDw53COTinnHNRkselAuGdLOGcb87NdHLu4ftiK+lPdQqG6uCcYc4NCwVLubyu5UsF+y22DJ5yeacDu/XiOO5PaVdwTjzn1prjUoH0mgXOZcG5KjlX18q5zfCcJtSJfqqDc1Y5V5BX0JQzv9qy/GJLKBfA8FzOud6U4JxazjWSLHahSK+9hHO+OdeyzzlQB+fsc+6IZ7l/C3V4ruRiSywXxPDcUwzn4JxqzkUJnNNQ81nO1eBchZybhcI5hupe5xxn5yxxblgIyoXAuctXg3LBDM8dxnlT2tUfcP2Il1FkkNIAAAAASUVORK5CYII="
        alt="bosch img"
      />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
