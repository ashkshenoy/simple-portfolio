// src/icons/index.jsx
import React from "react";

/**
 * Minimal, consistent icon family for Root Xperiments.
 * Each component accepts `className` and returns an SVG.
 * These are intentionally simple / geometric to match your aesthetic.
 */

export function ReactIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8" ry="3.3" />
      <ellipse cx="12" cy="12" rx="8" ry="3.3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3.3" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* J */}
      <path d="M7 4 v11 c0 2 -1 3 -3 3" />
      {/* S */}
      <path d="M17 6 c-2 -2 -6 -1 -6 2 c0 4 6 2 6 6 c0 3 -4 4 -6 2" />
    </svg>
  );
}



export function TypeScriptIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 9h6m-3 0v6" strokeLinecap="round" />
    </svg>
  );
}


export function TailwindCSSIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3 10c2.5-4 6-4 9 0 3-4 6.5-4 9 0-2.5 4-6 4-9 0-3 4-6.5 4-9 0z" />
      <path d="M3 16c2.5-4 6-4 9 0 3-4 6.5-4 9 0-2.5 4-6 4-9 0-3 4-6.5 4-9 0z" opacity=".6" />
    </svg>
  );
}


export function AngularIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3l9 4v9l-9 5-9-5V7l9-4z" />
      <path d="M8 15l4-8 4 8" strokeLinecap="round" />
    </svg>
  );
}


export function JavaIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 3c1 1 1 2 0 3s-1 2 1 3" />
      <path d="M8 15c1 1 3 1 4 1s3 0 4-1" />
      <path d="M6 18c2 1 10 1 12 0" />
    </svg>
  );
}


export function SpringIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <path d="M9 13c2 2 5 1 6-1 1-2 0-4-2-4s-4 2-4 5z" />
    </svg>
  );
}


export function SpringBootIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l8 5v8l-8 5-8-5V8l8-5z" />
      <path d="M12 9v4m0 3h.01" strokeLinecap="round" />
    </svg>
  );
}

export function PythonIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7 3h6a4 4 0 014 4v2H7V3zm10 6h-6a4 4 0 00-4 4v2h10v-6zM7 13h6a4 4 0 004-4v-2H7v6zm10 8h-6a4 4 0 01-4-4v-2h10v6z" />
    </svg>
  );
}

export function ClaudeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" fill="rgba(0,0,0,0.12)" />
    </svg>
  );
}

export function PostgreSQLIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l8 4v6c0 5-4 9-8 9s-8-4-8-9V6l8-4z" />
      <path d="M9 9h6v2H9V9z" fill="rgba(0,0,0,0.08)" />
    </svg>
  );
}

export function MongoDBIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2s5 3 5 8-3 9-5 12c-2-3-5-8-5-12S12 2 12 2z" />
    </svg>
  );
}

export function OracleDBIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <rect x="3" y="7" width="18" height="10" rx="1.5" />
      <path d="M6 9h12v6H6z" fill="rgba(0,0,0,0.06)" />
    </svg>
  );
}

export function DockerIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 13h4v3H3v-3zm5 0h4v3H8v-3zM3 9h6v2H3V9zM22 13v5c0 1-1 2-2 2H8v-7h14zM20 9h-4V7h4v2z" />
    </svg>
  );
}

export function KubernetesIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l8 4v8l-8 6-8-6V6l8-4zm1 6l-1 7 3-2 2-3-4-2z" />
    </svg>
  );
}

export function NetlifyIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l10 17H2L12 2zM12 6L6 16h12L12 6z" />
    </svg>
  );
}

export function RailwayIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4 7h16l-2 10H6L4 7zm4 2l1 6h6l1-6H8z" />
    </svg>
  );
}

export function VercelIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 3l9 16H3l9-16z" />
    </svg>
  );
}

export function AWSIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 12c2-2 6-3 9-3s7 1 9 3v6c-2 2-6 3-9 3s-7-1-9-3v-6z" />
      <path d="M7 11c1-1 3-1 5-1s4 0 5 1" fill="rgba(0,0,0,0.06)" />
    </svg>
  );
}

export function GithubIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 00-3 19c.2 0 .4-.2.4-.4v-2c-3 .6-3.6-1.5-3.6-1.5-.5-1.1-1.2-1.4-1.2-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.7 2.4 1.2 3 .9.1-.6.4-1.1.7-1.4-2.4-.3-5-1.3-5-5.4 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.4 2.7 1a9.4 9.4 0 015 0c1.9-1.4 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 4.1-2.6 5.1-5 5.4.4.3.8 1 .8 2v3c0 .2.2.4.4.4A10 10 0 0012 2z"/>
    </svg>
  );
}

export function KafkaIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="6" cy="8" r="2" />
      <circle cx="6" cy="16" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="18" cy="16" r="2" />
      <line x1="8" y1="8" x2="10" y2="12" />
      <line x1="8" y1="16" x2="10" y2="12" />
      <line x1="14" y1="12" x2="16" y2="8" />
      <line x1="14" y1="12" x2="16" y2="16" />
    </svg>
  );
}


