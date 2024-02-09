// Make a fetch GET request
fetch("https://app.tenantturner.com/listings-json/2530")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("data: ", data);
    // Apply map function to the data
    const mappedData = data.map((item) => {
      // Customize the mapping logic based on your data structure
      return {
        id: item.id,
        name: item.name,
        // Add other properties as needed
      };
    });

    // Log the mapped data to the console
    console.log(mappedData);
  })
  .catch((error) => {
    console.error("Error during fetch:", error);
  });
