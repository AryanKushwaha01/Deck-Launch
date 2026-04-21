import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PitchDeckAudit = () => {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleAnalyze = async () => {
        if (!file) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/audit/analyze`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            if (data.success) {
                setResult(data.analysis);
            } else {
                alert('Analysis failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-dark-bg min-h-screen text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
            <Navbar />

            <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
                <div className="max-w-4xl w-full text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        AI-Powered <span className="text-gold">Pitch Deck Audit</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Get instant, professional feedback on your pitch deck using advanced AI analysis. Upload your deck and receive a comprehensive investment scorecard.
                    </p>
                </div>

                {!result ? (
                    <div className="max-w-2xl w-full bg-gray-50 dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10 shadow-lg relative overflow-hidden">
                        {loading && (
                            <div className="absolute inset-0 bg-white/80 dark:bg-black/80 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
                                <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                                <p className="text-xl font-bold text-gray-900 dark:text-white animate-pulse">Analyzing your deck...</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Checking market sizing, business model, and narrative.</p>
                            </div>
                        )}

                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            Upload Your Pitch Deck
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                            Supported formats: PDF, PPT, PPTX (Max 10MB)
                        </p>

                        <div
                            className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-colors duration-300 ${dragActive ? 'border-gold bg-gold/5' : 'border-gray-300 dark:border-gray-600 hover:border-gold dark:hover:border-gold'}`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                accept=".pdf,.ppt,.pptx"
                                onChange={handleChange}
                            />
                            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center h-full w-full">
                                {file ? (
                                    <div className="flex flex-col items-center text-green-500">
                                        <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <p className="font-medium text-gray-900 dark:text-white">{file.name}</p>
                                        <p className="text-xs text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                ) : (
                                    <>
                                        <svg className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <p className="font-medium text-gray-900 dark:text-white">Click to upload or drag and drop your pitch deck</p>
                                    </>
                                )}
                            </label>
                        </div>

                        <button
                            onClick={handleAnalyze}
                            disabled={!file || loading}
                            className="w-full mt-8 bg-gold text-black font-bold py-4 px-6 rounded-lg hover:bg-[#F0C000] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                        >
                            AI Analyze Deck
                        </button>
                    </div>
                ) : (
                    <div className="max-w-4xl w-full animate-fade-in-up">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Score Card */}
                            <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-lg text-center flex flex-col justify-center items-center">
                                <h3 className="text-gray-500 dark:text-gray-400 uppercase text-xs font-bold tracking-wider mb-2">Overall Score</h3>
                                <div className="text-6xl font-extrabold text-gold">{result.overallScore}</div>
                                <div className="text-sm font-medium mt-2 text-gray-900 dark:text-white">{result.investorReadiness} Readiness</div>
                            </div>
                            {/* Summary Card */}
                            <div className="md:col-span-2 bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-lg">
                                <h3 className="text-gray-500 dark:text-gray-400 uppercase text-xs font-bold tracking-wider mb-3">AI Executive Summary</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {result.summary}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Detailed Breakdown</h3>
                            <div className="space-y-6">
                                {result.sections.map((section, index) => (
                                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{section.name}</h4>
                                            <div className={`px-3 py-1 rounded-full text-xs font-bold ${section.score >= 80 ? 'bg-green-100 text-green-800' :
                                                section.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                {section.score}/100
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {section.feedback}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                                <button
                                    onClick={() => { setResult(null); setFile(null); }}
                                    className="text-gray-500 hover:text-gold transition-colors text-sm font-medium"
                                >
                                    Analyze Another Deck
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default PitchDeckAudit;
