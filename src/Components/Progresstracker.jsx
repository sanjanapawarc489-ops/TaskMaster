import React from 'react';

export default function ProgressTracker({ tasks }) {
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="progress-card">
      <div className="progress-header">
        <span>Progress</span>
        <span className="progress-status">
          {completedCount} of {totalCount} completed ({percentage}%)
        </span>
      </div>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}