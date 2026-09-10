"use client";

import { Component, ReactNode } from "react";

interface ModelErrorBoundaryProps {
  children: ReactNode;
  onError: () => void;
}

interface ModelErrorBoundaryState {
  hasError: boolean;
}

// Keeps a failed 3D model load from taking the whole page down
export class ModelErrorBoundary extends Component<
  ModelErrorBoundaryProps,
  ModelErrorBoundaryState
> {
  state: ModelErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ModelErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
