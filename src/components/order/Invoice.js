import React from "react";

const Invoice = ({ order }) => (
  <div>
    <table style={styles.body}>
      <a style={styles.header} fixed>
        ~ {new Date().toLocaleString()} ~
      </a>
      <a style={styles.title}>Order Invoice</a>
      <a style={styles.author}>React Redux Ecommerce</a>
      <a style={styles.subtitle}>Order Summary</a>
    </table>
  </div>
);

const styles = {
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    padding: "100px",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
};

export default Invoice;
