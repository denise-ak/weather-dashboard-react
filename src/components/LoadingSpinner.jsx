function LoadingSpinner() {
  return (
    <div className="loading" role="status">
      <span className="spinner" aria-hidden="true"></span>
      Loading weather…
    </div>
  );
}

export default LoadingSpinner;