function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </p>

      <ul style={styles.links}>
        <li style={styles.item}>Privacy Policy</li>
        <li style={styles.item}>Terms</li>
        <li style={styles.item}>Contact</li>
      </ul>
    </footer>
  )
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "16px 24px",
    backgroundColor: "#2f3542",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    margin: 0
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "16px",
    margin: 0,
    padding: 0
  },
  item: {
    cursor: "pointer",
    fontSize: "14px"
  }
};

export default Footer;
