export default function Donate() {
  return (
    <div
      style={{
        margin: "30px auto",
        width: "50%",
        marginTop: "15px",
        border: "1px solid lightgrey",
        padding: "15px 15px 0",
        background: "#fafafa",
        borderRadius: "15px",
        boxShadow: "3px 5px #888888",
      }}
    >
      Please donate to support <b>Seattle Vert Ramp</b>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input name="cmd" type="hidden" value="_s-xclick" />{" "}
        <input name="hosted_button_id" type="hidden" value="SPYXARZDURP3S" />
        <table>
          <tr>
            <td>Select the amount to donate each month</td>
            <td>
              ${" "}
              <select name="os0">
                <option value="25.00">25.00</option>
                <option value="50.00">50.00</option>
                <option value="100.00">100.00</option>
              </select>{" "}
              USD
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td align="center">
              <i>Sign up for</i>
            </td>
          </tr>

          <tr>
            <td>
              <input
                alt="PayPal – The safer, easier way to pay online!"
                border="0"
                name="submit"
                src="https://www.paypalobjects.com/en_US/AU/i/btn/btn_auto_billing_CC_LG.gif"
                type="image"
              />
            </td>
          </tr>
        </table>
        <img
          alt=""
          border="0"
          height="1"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width="1"
        />
      </form>
    </div>
  );
}
