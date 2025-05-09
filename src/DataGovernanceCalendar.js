import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Copy, RefreshCw } from 'lucide-react';

// Predefined profound-sounding quotes about data governance
const dataGovernanceQuotes = [
  "Data isn't just an asset; it's the silent storyteller of your organization's journey.",
  "Governance is not about control, but about liberating data's true potential to serve humanity.",
  "The paradox of data governance: structure creates freedom.",
  "In the cathedral of modern business, data governance is both the foundation and the spire.",
  "True data stewardship means planting trees whose shade you may never sit under.",
  "Data without governance is power without wisdom.",
  "When we govern data with intention, we don't restrict possibilities—we crystallize them.",
  "The most elegant data models are those that breathe with the rhythm of the business they serve.",
  "A moment of data quality now saves an eternity of reconciliation later.",
  "The humble metadata catalog is to the enterprise what the compass was to ancient mariners.",
  "We don't inherit data from our predecessors; we borrow it from our successors.",
  "The quality of your decisions will never exceed the quality of your data governance.",
  "To master data is human; to govern it, divine.",
  "Behind every successful digital transformation is a silent army of data stewards.",
  "In the kingdom of information, governance is not the crown but the constitution.",
  "Data governance is the art of making the complex simple, and the chaotic coherent.",
  "The most dangerous phrase in data management is 'we've always done it this way.'",
  "Metadata is the poetry written between the lines of your data's prose.",
  "The true measure of data governance is not in the policies written, but in the cultures changed.",
  "Data may be the new oil, but governance is the refinery that makes it valuable."
];

export default function DataGovernanceCalendar() {
  const [quote, setQuote] = useState("");
  const [date, setDate] = useState(new Date());
  const [copied, setCopied] = useState(false);

  // Use the current date to select a quote (or generate a random one for demo purposes)
  useEffect(() => {
    // Use the day of the year to select a quote, or generate random if we need more variety
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % dataGovernanceQuotes.length;
    setQuote(dataGovernanceQuotes[quoteIndex]);
  }, [date]);

  // Format the date nicely
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Copy quote to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get a new quote
  const refreshQuote = () => {
    const randomIndex = Math.floor(Math.random() * dataGovernanceQuotes.length);
    setQuote(dataGovernanceQuotes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md">
        {/* Calendar header */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="mr-2" />
              <h1 className="text-xl font-bold">Data Governance Daily</h1>
            </div>
            <div className="text-sm opacity-75">Wisdom for Data Leaders</div>
          </div>
        </div>

        {/* Date display */}
        <div className="border-b p-4 bg-gray-50">
          <div className="text-center font-medium text-gray-700">{formattedDate}</div>
        </div>

        {/* Quote section */}
        <div className="p-8 flex flex-col items-center">
          <div className="text-4xl text-gray-300 mb-4">"</div>
          <p className="text-center text-gray-800 text-lg font-serif italic mb-6">
            {quote}
          </p>
          <div className="text-4xl text-gray-300 self-end">"</div>
        </div>

        {/* Action buttons */}
        <div className="border-t p-4 flex justify-between bg-gray-50">
          <button 
            onClick={copyToClipboard}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Copy size={16} className="mr-1" />
            {copied ? "Copied!" : "Copy Quote"}
          </button>
          <button 
            onClick={refreshQuote}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <RefreshCw size={16} className="mr-1" />
            New Quote
          </button>
        </div>

        {/* Tear-off effect */}
        <div className="relative">
          <div className="h-3 bg-white border-t border-dashed"></div>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-gray-400 cursor-pointer hover:text-gray-600">
            <ArrowRight className="transform rotate-90" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}