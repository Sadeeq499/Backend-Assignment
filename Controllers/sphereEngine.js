import axios from "axios";

export const SphereEngineController = async (req, res) => {
  // Define the API URL
  const apiUrl = `https://57b5245c.problems.sphere-engine.com/api/v4/test?access_token=${process.env.SPHERE_ENGINE_PROBLAMS_API}`;

  // Make a GET request using axios
  axios
    .get(apiUrl)
    .then((response) => {
      // Handle the response
      console.log(response.data);
      res.json({ response: response.data });
    })
    .catch((error) => {
      // Handle the error
      console.log(error);
    });
};

export const SubmissionController = async (req, res) => {
  // Define access parameters
  const accessToken = process.env.SPHERE_ENGINE_PROBLAMS_API;
  const endpoint = "57b5245c";

  // Get the user's solution from the request body
  const userSolution = req.body.solution;

  // Define request parameters
  const submissionData = {
    problemId: 42, // Replace with the ID of the specific question/problem
    compilerId: 11, // Replace with the ID of the compiler/language
    source: userSolution,
  };

  // Send request to the Sphere Engine API using axios
  axios
    .post(
      `https://${endpoint}/api/v4/submissions?access_token=${accessToken}`,
      submissionData
    )
    .then((response) => {
      const submissionResponse = response.data;
      console.log(submissionResponse); // Log submission data in JSON
      res.status(200).json(submissionResponse); // Return submission data to the user
    })
    .catch((error) => {
      if (error.response) {
        let errorMessage = "";
        if (error.response.status === 401) {
          errorMessage = "Invalid access token";
        } else if (error.response.status === 402) {
          errorMessage = "Unable to create submission";
        } else if (error.response.status === 400) {
          const responseBody = error.response.data;
          errorMessage = `Error code: ${responseBody.error_code}, details available in the message: ${responseBody.message}`;
        } else {
          errorMessage = "Connection problem";
        }

        console.log(errorMessage);
        res.status(error.response.status).json({ error: errorMessage });
      } else {
        console.log("Connection problem");
        res.status(500).json({ error: "Connection problem" });
      }
    });
};
