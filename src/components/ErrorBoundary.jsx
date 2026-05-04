import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message ?? '未知錯誤' };
  }

  componentDidCatch(error, info) {
    console.error('History Bridge caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-amber-50 p-8">
          <div className="text-center max-w-md">
            <p className="text-5xl mb-6">📜</p>
            <h1 className="text-2xl font-bold text-amber-900 mb-3">歷史的洪流中出了差錯</h1>
            <p className="text-amber-700/70 text-sm mb-6 font-sans">{this.state.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-amber-800 text-white rounded-xl font-bold hover:bg-amber-700 transition-colors"
            >
              重新載入
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
