import { Heading } from "grommet";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const generateData = (key) => {
  const data = [];

  if (key === "last7days") {
    for (let i = 0; i < 10; i++) {
      data.push({
        date: randomDate(new Date(2012, 0, 1), new Date()),
        amount: Math.floor(Math.random() * 20),
      });
    }
  }
  if (key === "last14days") {
    for (let i = 0; i < 15; i++) {
      data.push({
        date: randomDate(new Date(2012, 0, 1), new Date()),
        amount: Math.floor(Math.random() * 20),
      });
    }
  } else if (key === "last30days") {
    for (let i = 0; i < 20; i++) {
      data.push({
        date: randomDate(new Date(2012, 0, 1), new Date()),
        amount: Math.floor(Math.random() * 50),
      });
    }
  } else if (key === "alltime") {
    for (let i = 0; i < 25; i++) {
      data.push({
        date: randomDate(new Date(2012, 0, 1), new Date()),
        amount: Math.floor(Math.random() * 70),
      });
    }
  }
  return data;
};

// improving Search support of special characters
export const getRegExp = (text) => {
  // The line below escapes regular expression special characters:
  // [ \ ^ $ . | ? * + ( )
  const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");

  // Create the regular expression with modified value which
  // handles escaping special characters. Without escaping special
  // characters, errors will appear in the console
  return new RegExp(escapedText, "i");
};

export const Title = ({ titleText }) => (
  <Heading margin={{ bottom: "medium" }} level={3}>
    {titleText}
  </Heading>
);

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
