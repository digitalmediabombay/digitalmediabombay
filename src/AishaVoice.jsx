import React, { useEffect } from 'react';

const AishaVoice = () => {
  useEffect(() => {
    // These values connect AISHA to your Vapi account
    const publicKey = "pub-814f8112-bb6f-42dd-985a-7e22304cc5ab"; // 👈 Get this from Vapi -> API Keys
    const assistantId = "ae6658ac-df0d-4a70-a9ac-f6db869fba7f"; // 👈 Your Aisha ID from the dashboard

    // This creates and configures the floating voice button
    const widget = document.createElement('vapi-widget');
    widget.setAttribute('public-key', publicKey);
    widget.setAttribute('assistant-id', assistantId);
    widget.setAttribute('mode', "voice");
    widget.setAttribute('size', "compact");
    widget.setAttribute('theme', "dark");
    widget.setAttribute('base-color', "#0a192f"); // Deep Navy to match your site
    widget.setAttribute('accent-color', "#22d3ee"); // Cyan glow to match your site
    widget.setAttribute('position', "bottom-left"); // Opposite to your existing chat
    
    document.body.appendChild(widget);

    // Cleanup when component unmounts
    return () => {
      if (document.body.contains(widget)) {
        document.body.removeChild(widget);
      }
    };
  }, []);

  return null; 
};

export default AishaVoice;
