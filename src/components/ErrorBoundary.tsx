import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0F1012] text-[#F0F0F0] flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full p-8 bg-[#16181D] border border-[#2D2F36] rounded-xl shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-rose-950/50 border border-rose-800/60 flex items-center justify-center text-rose-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-light tracking-tight text-[#F0F0F0]">
              A Raga Sai - Full-Stack Developer
            </h1>
            <p className="text-sm text-[#80848C]">
              An unexpected display issue occurred while loading this page.
            </p>
            {this.state.error && (
              <div className="p-3 bg-[#0F1012] border border-[#2D2F36] rounded text-xs font-mono text-rose-300 text-left overflow-auto max-h-32">
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-500 rounded border border-teal-500 transition-all shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload Portfolio</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
