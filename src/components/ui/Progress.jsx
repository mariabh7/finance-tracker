import LinearProgress from "@mui/material/LinearProgress";
export default function ProgressBar({ progress = 81 }) {
  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: 10,
        borderRadius: 5,
        mt: 1,
        backgroundColor: "#f0f0f0",
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#000000",
        },
      }}
    />
  );
}
