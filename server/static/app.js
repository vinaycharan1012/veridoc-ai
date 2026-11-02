const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

// SVG Icons
const Icons = {
  Shield: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  })),
  Dashboard: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  })),
  Archive: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
  })),
  FileText: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  })),
  Cpu: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
  })),
  DigiLocker: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
  })),
  Face: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })),
  Blockchain: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
  })),
  FraudNet: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  })),
  Rules: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  })),
  Chat: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  })),
  Compare: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
  })),
  Menu: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6h16M4 12h16M4 18h16"
  })),
  PlusCircle: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  })),
  Upload: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  })),
  CheckCircle: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 text-emerald-600",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  })),
  AlertCircle: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 text-red-600",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })),
  Award: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
  })),
  Search: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  })),
  Printer: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
  })),
  Refresh: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  })),
  UserCheck: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  })),
  Eye: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  })),
  Logout: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  })),
  Layers: () => /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  }))
};

// ---------------- THREE.JS 3D HOLOGRAPHIC SEAL COMPONENT ----------------
function ThreeDHologramShield() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current || !window.THREE) return;
    const container = containerRef.current;
    const width = container.clientWidth || 220;
    const height = container.clientHeight || 140;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
    } catch (e) {
      console.warn('WebGL initialization skipped:', e);
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Outer Hexagonal Security Ring
    const geometry = new THREE.IcosahedronGeometry(1.6, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x2d6a4f,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner Glowing Core (Cryptographic Seed)
    const innerGeo = new THREE.OctahedronGeometry(0.9, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x1b4332,
      wireframe: false,
      transparent: true,
      opacity: 0.9
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Particle Points
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 120;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 4.5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x52b788,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.01;
      innerMesh.rotation.x -= 0.01;
      innerMesh.rotation.y -= 0.008;
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center justify-center p-2 rounded-2xl bg-gradient-to-b from-forest-50/80 to-white border border-forest-200 shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: "w-full h-28"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-mono font-bold tracking-widest uppercase bg-forest-100 text-forest-800 px-2 py-0.5 rounded-full"
  }, "3D Quantum Shield Active")));
}
function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userMode, setUserMode] = useState('manager'); // 'manager' | 'applicant'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Personas selector
  const personas = [{
    name: 'Sunita Venkatesh',
    role: 'Senior Technical Verification Officer',
    category: 'officer'
  }, {
    name: 'Dr. Rameshwar Sharma',
    role: 'Administrator - Director of Verification & Policy',
    category: 'admin'
  }, {
    name: 'Anand K. Verma',
    role: 'Verification Officer - Assistant Director',
    category: 'officer'
  }, {
    name: 'Prof. Rajesh K. Nair',
    role: 'Institution Representative - Registrar & Member Secretary',
    category: 'institution'
  }, {
    name: 'Dr. Meera Sengupta',
    role: 'Institution Representative - Principal & Head of Institute',
    category: 'institution'
  }];
  const [selectedPersona, setSelectedPersona] = useState(personas[0]);
  const [showPersonaDropdown, setShowPersonaDropdown] = useState(false);

  // Auth states
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('officer@veridoc.gov');
  const [password, setPassword] = useState('password123');
  const [fullName, setFullName] = useState('Sunita Venkatesh');
  const [authError, setAuthError] = useState('');

  // Data states
  const [stats, setStats] = useState({
    total_scanned: 10,
    documents_processed: 10,
    deficiencies_flagged: 4,
    real_count: 8,
    fake_count: 2,
    suspicious_count: 1,
    avg_authenticity: 91.5,
    total_applications: 5,
    awaiting_review: 1,
    clarification_hold: 1,
    review_completed: 1,
    recent_audits: []
  });
  const [documents, setDocuments] = useState([]);
  const [applications, setApplications] = useState([]);
  const [complianceRules, setComplianceRules] = useState([]);
  const [fraudIntelligence, setFraudIntelligence] = useState(null);
  const [templateComparison, setTemplateComparison] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // AI Studio states
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState('Land Registry & Infrastructure Deed');
  const [isVerifying, setIsVerifying] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [viewHeatmap, setViewHeatmap] = useState(false);
  const [activeDeficiency, setActiveDeficiency] = useState(null);

  // DigiLocker Interactive States
  const [digiDocType, setDigiDocType] = useState('aadhaar');
  const [digiIdNumber, setDigiIdNumber] = useState('9812-4412-8801');
  const [digiResult, setDigiResult] = useState(null);
  const [digiLoading, setDigiLoading] = useState(false);

  // Biometrics Interactive States
  const [bioResult, setBioResult] = useState(null);
  const [bioLoading, setBioLoading] = useState(false);
  const [bioMode, setBioMode] = useState('match');

  // AI Regulatory Assistant / Chatbot States
  const [complianceAudit, setComplianceAudit] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{
    sender: 'ai',
    text: 'Hello! I am the VERIDOC AI Regulatory Assistant. Ask me about APH 2026-27 rules, missing mandatory fields, or document tampering indicators.'
  }]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  // Blockchain Certificate Lookup State
  const [blockchainLookupId, setBlockchainLookupId] = useState('VDOC-CHAIN-99210-C');
  const [blockchainData, setBlockchainData] = useState(null);

  // New Application form
  const [appName, setAppName] = useState('');
  const [appClassification, setAppClassification] = useState('Affiliation Filing');
  const [appNotes, setAppNotes] = useState('');
  const [appMsg, setAppMsg] = useState('');

  // Manager Decision Modal
  const [selectedApp, setSelectedApp] = useState(null);
  const [managerRemarks, setManagerRemarks] = useState('');
  const [decisionMsg, setDecisionMsg] = useState('');

  // Certificate Modal
  const [certificateData, setCertificateData] = useState(null);

  // Quick Upload Vault Modal
  const [showStartVaultModal, setShowStartVaultModal] = useState(false);

  // Technology & Architecture Flow Modal
  const [showTechModal, setShowTechModal] = useState(false);

  // Reset Demo Notification
  const [resetMsg, setResetMsg] = useState('');
  const [isDailyRefreshing, setIsDailyRefreshing] = useState(false);
  const [dailyRefreshMsg, setDailyRefreshMsg] = useState('');

  const handleDailyRefresh = async () => {
    setIsDailyRefreshing(true);
    setDailyRefreshMsg('');
    try {
      const res = await fetch('/api/applications/daily-refresh', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.applications) setApplications(data.applications);
        setDailyRefreshMsg(`Daily refresh complete: ${data.applications ? data.applications.length : 8} institutional applications synchronized!`);
        setTimeout(() => setDailyRefreshMsg(''), 5000);
      }
      loadData();
    } catch (err) {
      console.error('Daily refresh error:', err);
    } finally {
      setIsDailyRefreshing(false);
    }
  };

  // Load User and App Data
  const loadData = async () => {
    if (!token) return;
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    try {
      const [sRes, dRes, aRes, rRes, fRes, tRes] = await Promise.all([fetch('/api/dashboard/stats', {
        headers
      }), fetch('/api/documents', {
        headers
      }), fetch('/api/applications', {
        headers
      }), fetch('/api/compliance-rules', {
        headers
      }), fetch('/api/fraud/intelligence', {
        headers
      }), fetch('/api/template/compare', {
        headers
      })]);
      if (sRes.ok) setStats(await sRes.json());
      if (dRes.ok) setDocuments(await dRes.json());
      if (aRes.ok) setApplications(await aRes.json());
      if (rRes.ok) setComplianceRules(await rRes.json());
      if (fRes.ok) setFraudIntelligence(await fRes.json());
      if (tRes.ok) setTemplateComparison(await tRes.json());
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (token) {
      loadData();
      const pollTimer = setInterval(() => {
        loadData();
      }, 15000);
      return () => clearInterval(pollTimer);
    }
  }, [token, activeTab]);

  // Authentication Handler
  const handleAuth = async e => {
    e.preventDefault();
    setAuthError('');
    const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
    const payload = isRegistering ? {
      email,
      password,
      full_name: fullName,
      organization: 'Regulatory Verification Division'
    } : {
      email,
      password
    };
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Authentication failed');
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setToken(data.access_token);
      setUser(data.user);
    } catch (err) {
      setAuthError(err.message);
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    setToken('');
    setUser(null);
  };

  // Reset Demo Records to VERIDOC baseline
  const handleResetDemo = async () => {
    try {
      const res = await fetch('/api/demo/reset', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        setResetMsg('Demo records reset to baseline AY 2026-27 state!');
        setTimeout(() => setResetMsg(''), 3000);
        loadData();
      }
    } catch (e) {
      alert('Failed to reset demo records');
    }
  };

  // DigiLocker Verify Pull
  const handleDigiLockerPull = async e => {
    e.preventDefault();
    setDigiLoading(true);
    setDigiResult(null);
    try {
      const res = await fetch('/api/digilocker/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          doc_type: digiDocType,
          identifier: digiIdNumber,
          applicant_name: selectedPersona.name
        })
      });
      const data = await res.json();
      setTimeout(() => {
        setDigiResult(data);
        setDigiLoading(false);
        loadData();
      }, 600);
    } catch (err) {
      alert(err.message);
      setDigiLoading(false);
    }
  };

  // Biometric Verification Handler
  const handleBiometricTest = async mode => {
    setBioLoading(true);
    setBioMode(mode);
    try {
      const res = await fetch('/api/biometrics/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          mode
        })
      });
      const data = await res.json();
      setTimeout(() => {
        setBioResult(data);
        setBioLoading(false);
        loadData();
      }, 600);
    } catch (err) {
      alert(err.message);
      setBioLoading(false);
    }
  };

  // Regulatory Compliance Assistant Check
  const handleRunComplianceAudit = async () => {
    try {
      const res = await fetch('/api/compliance/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          category
        })
      });
      const data = await res.json();
      setComplianceAudit(data);
    } catch (e) {
      alert('Failed to run compliance audit');
    }
  };

  // Blockchain Certificate Lookup
  const handleBlockchainLookup = async id => {
    try {
      const res = await fetch(`/api/blockchain/verify/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      setBlockchainData(data);
    } catch (e) {
      alert('Blockchain record not found');
    }
  };

  // AI Chatbot Handler
  const handleSendChat = async e => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages(prev => [...prev, {
      sender: 'user',
      text: userMsg
    }]);
    setChatInput('');
    setChatLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: userMsg
        })
      });
      const data = await res.json();
      setChatMessages(prev => [...prev, {
        sender: 'ai',
        text: data.reply
      }]);
    } catch (err) {
      setChatMessages(prev => [...prev, {
        sender: 'ai',
        text: 'Error contacting regulatory intelligence engine.'
      }]);
    } finally {
      setChatLoading(false);
    }
  };

  // Document Verification Submission
  const handleVerify = async e => {
    e.preventDefault();
    if (!selectedFile) return;
    setIsVerifying(true);
    setScanResult(null);
    const formData = new FormData();
    formData.append('document', selectedFile);
    formData.append('category', category);
    try {
      const res = await fetch('/api/documents/verify', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Verification failed');
      setScanResult(data);
      loadData();
    } catch (err) {
      alert(err.message);
    } finally {
      setIsVerifying(false);
    }
  };

  // 1-Click Demo Document Loader
  const handleLoadDemo = async type => {
    setIsVerifying(true);
    setScanResult(null);
    try {
      const res = await fetch('/api/documents/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          type
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Demo load failed');
      setTimeout(() => {
        setScanResult(data);
        setIsVerifying(false);
        loadData();
      }, 500);
    } catch (err) {
      alert(err.message);
      setIsVerifying(false);
    }
  };

  // Submit New Application
  const handleCreateApp = async e => {
    e.preventDefault();
    setAppMsg('');
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          applicant_name: appName,
          dossier_type: appClassification,
          notes: appNotes
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setAppMsg(`Application #${data.application_number} queued for Regulatory Verification!`);
      setAppName('');
      setAppNotes('');
      loadData();
    } catch (err) {
      alert(err.message);
    }
  };

  // Manager Decision Submission
  const handleManagerDecision = async decision => {
    if (!selectedApp) return;
    setDecisionMsg('');
    try {
      const res = await fetch(`/api/applications/${selectedApp.id}/decision`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          decision,
          remarks: managerRemarks || 'Reviewed and adjudicated under APH Verification directives.'
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit decision');
      setDecisionMsg(`Application stamped as ${decision}!`);
      setTimeout(() => {
        setSelectedApp(null);
        setManagerRemarks('');
        setDecisionMsg('');
        loadData();
      }, 1000);
    } catch (err) {
      alert(err.message);
    }
  };

  // Fetch Certificate
  const handleOpenCertificate = async docId => {
    try {
      const res = await fetch(`/api/documents/${docId}/certificate`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate certificate');
      setCertificateData(data);
    } catch (err) {
      alert(err.message);
    }
  };

  // Filtered Documents
  const filteredDocuments = useMemo(() => {
    return documents.filter(doc => {
      const matchesSearch = doc.original_name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.category.toLowerCase().includes(searchQuery.toLowerCase()) || doc.sha256_hash.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'ALL' || doc.verdict === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [documents, searchQuery, statusFilter]);

  // Filtered Applications
  const filteredApplications = useMemo(() => {
    return applications.filter(app => {
      const matchesSearch = app.applicant_name.toLowerCase().includes(searchQuery.toLowerCase()) || app.application_number.toLowerCase().includes(searchQuery.toLowerCase()) || app.dossier_type && app.dossier_type.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'ALL' || app.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [applications, searchQuery, statusFilter]);

  // ---------------- AUTH SCREEN ----------------
  if (!token) {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-white flex flex-col justify-center items-center p-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-xl p-8 transform transition hover:shadow-2xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-3 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-3 bg-forest-600 text-white rounded-2xl shadow-md"
    }, /*#__PURE__*/React.createElement(Icons.Shield, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-black text-forest-600 leading-none"
    }, "VERIDOC \u2022 \u0935\u0947\u0930\u0940\u0921\u0949\u0915"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1"
    }, "Regulatory Verification Copilot"))), /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold text-forest-600 mb-1"
    }, isRegistering ? 'Create Verification Account' : 'Officer & Citizen Sign In'), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mb-6"
    }, "OAuth 2.0 Protected \u2022 DigiLocker API Ready \u2022 Immutable Audit Logs"), authError && /*#__PURE__*/React.createElement("div", {
      className: "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium"
    }, authError), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleAuth,
      className: "space-y-4"
    }, isRegistering && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-[11px] font-bold text-forest-600 uppercase mb-1"
    }, "Full Officer Name"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      required: true,
      placeholder: "Sunita Venkatesh",
      className: "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-600 focus:outline-none",
      value: fullName,
      onChange: e => setFullName(e.target.value)
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-[11px] font-bold text-forest-600 uppercase mb-1"
    }, "Email Address"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      required: true,
      placeholder: "officer@veridoc.gov",
      className: "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-600 focus:outline-none",
      value: email,
      onChange: e => setEmail(e.target.value)
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-[11px] font-bold text-forest-600 uppercase mb-1"
    }, "Password"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      required: true,
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      className: "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-forest-600 focus:outline-none",
      value: password,
      onChange: e => setPassword(e.target.value)
    })), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "w-full py-3 bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl shadow-md transition duration-200"
    }, isRegistering ? 'Sign Up & Initialize Vault' : 'Sign In with OAuth 2.0')), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500"
    }, /*#__PURE__*/React.createElement("span", null, "Demo Officer Credentials:"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        setEmail('officer@veridoc.gov');
        setPassword('password123');
      },
      className: "font-bold text-forest-600 hover:underline"
    }, "Fill Demo Info")), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 text-center text-xs text-gray-500"
    }, isRegistering ? 'Already registered?' : "Don't have an account?", ' ', /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        setIsRegistering(!isRegistering);
        setAuthError('');
      },
      className: "font-bold text-forest-600 hover:underline"
    }, isRegistering ? 'Sign In' : 'Sign Up'))));
  }

  // ---------------- MAIN WORKSPACE ----------------
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-screen bg-white overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-forest-900 text-white px-4 md:px-6 py-2 flex flex-col md:flex-row items-center justify-between text-[11px] border-b border-forest-800 z-30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 font-semibold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-amber-400"
  }, "\u0905\u0916\u093F\u0932 \u092D\u093E\u0930\u0924\u0940\u092F \u0924\u0915\u0928\u0940\u0915\u0940 \u0936\u093F\u0915\u094D\u0937\u093E \u092A\u0930\u093F\u0937\u0926"), /*#__PURE__*/React.createElement("span", null, "\u2022 ALL INDIA COUNCIL FOR TECHNICAL EDUCATION"), /*#__PURE__*/React.createElement("span", {
    className: "text-forest-300 hidden lg:inline"
  }, "| A Statutory Body of the Government of India")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3 mt-1 md:mt-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-forest-800 text-forest-200 px-2 py-0.5 rounded font-mono text-[10px]"
  }, "APH 2026-27 Portal"), /*#__PURE__*/React.createElement("span", {
    className: "text-forest-300 hidden sm:inline"
  }, "Helpline: 011-29581000"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowTechModal(true),
    className: "bg-forest-700 hover:bg-forest-600 text-white px-2.5 py-0.5 rounded text-[10px] font-bold transition flex items-center space-x-1"
  }, /*#__PURE__*/React.createElement(Icons.Layers, null), /*#__PURE__*/React.createElement("span", null, "Tech Architecture")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50 border-b border-amber-200 text-amber-900 px-4 md:px-6 py-1.5 flex items-center justify-between text-xs z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 truncate"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-amber-500 text-white px-2 py-0.5 rounded font-black text-[10px] tracking-wider uppercase shrink-0"
  }, "Statutory Notice"), /*#__PURE__*/React.createElement("span", {
    className: "truncate"
  }, "Automated observations provide evidentiary assistance under AICTE APH 2026-27 guidelines. Final regulatory decisions rest exclusively with appointed officers.")), resetMsg && /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[11px] shrink-0 ml-2"
  }, resetMsg)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 overflow-hidden relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:hidden absolute top-3 left-4 z-40"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
    className: "p-2 bg-forest-50 border border-forest-200 text-forest-700 rounded-xl shadow-sm hover:bg-forest-100 transition",
    title: "Toggle Menu"
  }, /*#__PURE__*/React.createElement(Icons.Menu, null))), /*#__PURE__*/React.createElement("aside", {
    className: `fixed md:static inset-y-0 left-0 z-40 w-64 border-r border-gray-200 bg-white flex flex-col justify-between shrink-0 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-y-auto custom-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 border-b border-gray-100 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2 bg-forest-600 text-white rounded-xl shadow-md animate-pulse-slow"
  }, /*#__PURE__*/React.createElement(Icons.Shield, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-lg font-black text-forest-600 leading-none"
  }, "VERIDOC \u2022 \u0935\u0947\u0930\u0940\u0921\u0949\u0915"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1"
  }, "Regulatory Verification"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMobileMenuOpen(false),
    className: "md:hidden text-gray-400 hover:text-gray-600 text-xl font-bold"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "px-3 py-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 mb-1"
  }, "Regulatory Navigation"), /*#__PURE__*/React.createElement("nav", {
    className: "space-y-1"
  }, [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: Icons.Dashboard
  }, {
    id: 'applications',
    label: 'Applications',
    icon: Icons.FileText
  }, {
    id: 'vault',
    label: 'Evidence Archive',
    icon: Icons.Archive
  }, {
    id: 'ai-verify',
    label: 'AI Verification Studio',
    icon: Icons.Cpu
  }, {
    id: 'digilocker',
    label: 'DigiLocker & Gov APIs',
    icon: Icons.DigiLocker
  }, {
    id: 'biometrics',
    label: 'Biometric Face & Liveness',
    icon: Icons.Face
  }, {
    id: 'template-compare',
    label: 'Template Inspector',
    icon: Icons.Compare
  }, {
    id: 'fraud-intel',
    label: 'AI Fraud Intelligence',
    icon: Icons.FraudNet
  }, {
    id: 'blockchain',
    label: 'Blockchain Certificates',
    icon: Icons.Blockchain
  }, {
    id: 'rules',
    label: 'Compliance Rules',
    icon: Icons.Rules
  }, {
    id: 'new-application',
    label: 'New Application',
    icon: Icons.PlusCircle
  }].map(item => {
    const Icon = item.icon;
    const isActive = activeTab === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => {
        setActiveTab(item.id);
        setSearchQuery('');
        setStatusFilter('ALL');
        setMobileMenuOpen(false);
      },
      className: `w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-bold transition duration-150 ${isActive ? 'bg-forest-50 text-forest-600 border-l-4 border-forest-600 shadow-sm font-black' : 'text-gray-600 hover:bg-gray-50'}`
    }, /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, item.label));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2"
  }, /*#__PURE__*/React.createElement(ThreeDHologramShield, null))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-t border-gray-100 bg-gray-50/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 truncate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm"
  }, selectedPersona.name.split(' ').map(n => n[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("div", {
    className: "truncate"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-gray-800 leading-tight truncate"
  }, selectedPersona.name), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 truncate"
  }, selectedPersona.role))), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogout,
    title: "Sign Out",
    className: "p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
  }, /*#__PURE__*/React.createElement(Icons.Logout, null))))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    onClick: () => setMobileMenuOpen(false),
    className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 overflow-y-auto bg-white p-4 md:p-8 custom-scroll"
  }, /*#__PURE__*/React.createElement("header", {
    className: "flex flex-col lg:flex-row justify-between items-start lg:items-center pb-6 border-b border-gray-100 mb-6 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pl-12 md:pl-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-forest-100 text-forest-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase"
  }, "Academic Year 2026-27"), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400 text-xs"
  }, "\u2022"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-gray-500"
  }, "National Approval Process Handbook (APH)")), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl md:text-2xl font-black text-forest-600 tracking-tight"
  }, activeTab === 'dashboard' && 'Verification & Audit Operations Dashboard', activeTab === 'applications' && 'Applications Review Queue', activeTab === 'vault' && 'Evidence Archive & Encrypted Document Vault', activeTab === 'ai-verify' && 'Document Authenticity Verification Studio', activeTab === 'digilocker' && 'DigiLocker & National Government Gateway', activeTab === 'biometrics' && 'Biometric Face Match & Anti-Spoof Liveness', activeTab === 'template-compare' && 'Master Template Layout & Font Inspector', activeTab === 'fraud-intel' && 'AI Fraud Intelligence & Duplicate Graph', activeTab === 'blockchain' && 'Blockchain-Anchored Tamper-Proof Certificates', activeTab === 'rules' && 'Statutory APH 2026-27 Compliance Rules Engine', activeTab === 'new-application' && 'Submit New Regulatory Application'), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-0.5"
  }, "Active Session: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-gray-700"
  }, selectedPersona.name), " (", selectedPersona.role, ").")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 self-end lg:self-auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleDailyRefresh,
    disabled: isDailyRefreshing,
    className: "px-3 py-1.5 bg-forest-600 hover:bg-forest-700 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 transition shadow-sm border border-forest-500",
    title: "Daily sync and fast refresh of institutional applications"
  }, /*#__PURE__*/React.createElement("span", {
    className: isDailyRefreshing ? "inline-block animate-spin" : "inline-block"
  }, "🔄"), /*#__PURE__*/React.createElement("span", null, isDailyRefreshing ? "Syncing..." : "Daily Refresh • दैनिक रिफ्रेश")), /*#__PURE__*/React.createElement("button", {
    onClick: handleResetDemo,
    className: "px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl flex items-center space-x-1.5 transition border border-gray-300 shadow-sm",
    title: "Restore demo applications and documents to baseline"
  }, /*#__PURE__*/React.createElement(Icons.Refresh, null), /*#__PURE__*/React.createElement("span", null, "Reset Demo Records")), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowPersonaDropdown(!showPersonaDropdown),
    className: "px-3 py-1.5 bg-forest-50 hover:bg-forest-100 text-forest-800 text-xs font-bold rounded-xl border border-forest-200 flex items-center space-x-1.5 transition shadow-sm"
  }, /*#__PURE__*/React.createElement(Icons.UserCheck, null), /*#__PURE__*/React.createElement("span", {
    className: "truncate max-w-[120px]"
  }, selectedPersona.name), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-forest-600"
  }, "\u25BE")), showPersonaDropdown && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl p-3 z-50 space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 pb-1"
  }, "Simulate Verification Role / Persona"), personas.map((p, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    onClick: () => {
      setSelectedPersona(p);
      setUserMode(p.category === 'institution' ? 'applicant' : 'manager');
      setShowPersonaDropdown(false);
    },
    className: `p-2.5 rounded-xl cursor-pointer transition text-xs flex items-center justify-between ${selectedPersona.name === p.name ? 'bg-forest-50 border border-forest-200' : 'hover:bg-gray-50'}`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-gray-900"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-500"
  }, p.role)), selectedPersona.name === p.name && /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 bg-forest-600 text-white rounded text-[10px] font-bold"
  }, "Active"))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('ai-verify'),
    className: "px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center space-x-2 transition"
  }, /*#__PURE__*/React.createElement(Icons.Upload, null), /*#__PURE__*/React.createElement("span", null, "Verify Document")))), activeTab === 'dashboard' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, userMode === 'manager' && /*#__PURE__*/React.createElement("div", {
    className: "bg-forest-50 border border-forest-200 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-800 flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(Icons.UserCheck, null), /*#__PURE__*/React.createElement("span", null, "Verification & Audit Command Center")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-forest-600 mt-0.5"
  }, "Directly adjudicate regulatory filings, pull DigiLocker records, or stamp blockchain certificates.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('applications'),
    className: "px-3.5 py-2 bg-forest-600 text-white text-xs font-bold rounded-xl hover:bg-forest-700 shadow-sm"
  }, "Review Applications (", stats.awaiting_review || applications.filter(a => a.status === 'UNDER_REVIEW').length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActiveTab('fraud-intel'),
    className: "px-3.5 py-2 bg-red-600 text-white text-xs font-bold rounded-xl hover:bg-red-700 shadow-sm"
  }, "Fraud Net Alerts (", stats.deficiencies_flagged, ")"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 border border-gray-200 rounded-2xl shadow-sm bg-white hover:border-forest-600 transition"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider"
  }, "Total Applications"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-forest-600 mt-2"
  }, stats.total_applications || 5), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 mt-1"
  }, "Active regulatory filings")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 border border-gray-200 rounded-2xl shadow-sm bg-white hover:border-blue-500 transition"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider"
  }, "Awaiting Review"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-blue-600 mt-2"
  }, stats.awaiting_review || 1), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 mt-1"
  }, "Pending officer review")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 border border-gray-200 rounded-2xl shadow-sm bg-white hover:border-amber-500 transition"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider"
  }, "Clarification Hold"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-amber-600 mt-2"
  }, stats.clarification_hold || 1), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 mt-1"
  }, "Pending response")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 border border-gray-200 rounded-2xl shadow-sm bg-white hover:border-emerald-500 transition"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider"
  }, "Review Completed"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-emerald-600 mt-2"
  }, stats.review_completed || 1), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 mt-1"
  }, "Preliminary finalized")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 border border-gray-200 rounded-2xl shadow-sm bg-white hover:border-forest-600 transition"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider"
  }, "Documents Processed"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-forest-600 mt-2"
  }, stats.documents_processed || stats.total_scanned || 10), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 mt-1"
  }, "SHA-256 hashed & locked")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 border border-gray-200 rounded-2xl shadow-sm bg-white hover:border-red-500 transition"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider"
  }, "Deficiencies Flagged"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-red-600 mt-2"
  }, stats.deficiencies_flagged || 4), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 mt-1"
  }, "Non-compliant checks"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 shadow-sm bg-white flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-600"
  }, "Application Status Distribution"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono text-gray-400"
  }, "AY 2026-27")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-semibold text-gray-700 mb-1"
  }, /*#__PURE__*/React.createElement("span", null, "Verified Authentic"), /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "40%")), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-gray-100 rounded-full h-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-600 h-2 rounded-full",
    style: {
      width: '40%'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-semibold text-gray-700 mb-1"
  }, /*#__PURE__*/React.createElement("span", null, "Awaiting Officer Review"), /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600"
  }, "40%")), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-gray-100 rounded-full h-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-600 h-2 rounded-full",
    style: {
      width: '40%'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-semibold text-gray-700 mb-1"
  }, /*#__PURE__*/React.createElement("span", null, "Clarification Hold / Correction"), /*#__PURE__*/React.createElement("span", {
    className: "text-amber-600"
  }, "20%")), /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-gray-100 rounded-full h-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-500 h-2 rounded-full",
    style: {
      width: '20%'
    }
  }))))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-400 pt-4 border-t border-gray-100 mt-4"
  }, "Real-time distribution across active intake batches.")), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 shadow-sm bg-white flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-600"
  }, "Weekly Review Velocity"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono text-gray-400"
  }, "30-Day Run")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-between h-28 pt-4 px-2"
  }, [{
    day: 'Mon',
    count: 12,
    height: '60%'
  }, {
    day: 'Tue',
    count: 18,
    height: '90%'
  }, {
    day: 'Wed',
    count: 14,
    height: '70%'
  }, {
    day: 'Thu',
    count: 20,
    height: '100%'
  }, {
    day: 'Fri',
    count: 16,
    height: '80%'
  }, {
    day: 'Sat',
    count: 8,
    height: '40%'
  }, {
    day: 'Sun',
    count: 4,
    height: '20%'
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex flex-col items-center space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-bold text-gray-500"
  }, b.count), /*#__PURE__*/React.createElement("div", {
    className: "w-6 bg-forest-100 hover:bg-forest-600 rounded-t transition cursor-pointer",
    style: {
      height: b.height
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-400"
  }, b.day))))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-400 pt-4 border-t border-gray-100 mt-4"
  }, "Average velocity: 13.1 verifications per working day.")), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 shadow-sm bg-white flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-600"
  }, "Top Deficiencies by Clause"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono text-gray-400"
  }, "By Frequency")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2.5 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between p-2 bg-red-50/50 rounded-lg border border-red-100"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-red-900"
  }, "Clause 1.8"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-red-600"
  }, "Digital Font Splice & Compression Anomaly")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-red-700 bg-red-100 px-2 py-0.5 rounded"
  }, "2 Cases")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between p-2 bg-amber-50/50 rounded-lg border border-amber-100"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-amber-900"
  }, "Clause 4.1.2"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-amber-700"
  }, "Land Deed Boundary Marker Noise")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded"
  }, "1 Case")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between p-2 bg-amber-50/50 rounded-lg border border-amber-100"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-amber-900"
  }, "Clause 2.4"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-amber-700"
  }, "Seal & Signature Pressure Gradient")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded"
  }, "1 Case")))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-400 pt-4 border-t border-gray-100 mt-4"
  }, "Mandatory human officer review required for all 4 flagged cases."))), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 shadow-sm bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-base font-bold text-forest-600"
  }, "Immutable Audit Trail & Compliance Logs"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400 font-mono"
  }, "AES-256 Digest Active")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left border-collapse text-xs"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "border-b border-gray-100 text-gray-400 uppercase"
  }, /*#__PURE__*/React.createElement("th", {
    className: "py-2.5 px-3"
  }, "Event Action"), /*#__PURE__*/React.createElement("th", {
    className: "py-2.5 px-3"
  }, "Entity Reference"), /*#__PURE__*/React.createElement("th", {
    className: "py-2.5 px-3"
  }, "Details"), /*#__PURE__*/React.createElement("th", {
    className: "py-2.5 px-3"
  }, "Timestamp"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-50"
  }, stats.recent_audits && stats.recent_audits.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.id,
    className: "hover:bg-gray-50"
  }, /*#__PURE__*/React.createElement("td", {
    className: "py-2.5 px-3 font-bold text-forest-600"
  }, a.action), /*#__PURE__*/React.createElement("td", {
    className: "py-2.5 px-3 font-mono text-gray-400"
  }, "#", a.entity_id), /*#__PURE__*/React.createElement("td", {
    className: "py-2.5 px-3 text-gray-700"
  }, a.details), /*#__PURE__*/React.createElement("td", {
    className: "py-2.5 px-3 text-gray-400 font-mono"
  }, a.timestamp)))))))), activeTab === 'applications' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-forest-600"
  }, "Applications Review Queue"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, userMode === 'manager' ? 'Click any application to inspect compliance findings and stamp official adjudications.' : 'Track the status and progress of regulatory compliance filings.')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3 w-full sm:w-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1 sm:w-64"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  }, /*#__PURE__*/React.createElement(Icons.Search, null)), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search applicant / number...",
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value),
    className: "w-full pl-9 pr-4 py-2 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-forest-600 focus:outline-none"
  })), /*#__PURE__*/React.createElement("select", {
    value: statusFilter,
    onChange: e => setStatusFilter(e.target.value),
    className: "px-3 py-2 border border-gray-300 rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-forest-600"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ALL"
  }, "All Statuses"), /*#__PURE__*/React.createElement("option", {
    value: "VERIFIED"
  }, "Verified"), /*#__PURE__*/React.createElement("option", {
    value: "UNDER_REVIEW"
  }, "Under Review"), /*#__PURE__*/React.createElement("option", {
    value: "NEEDS_CORRECTION"
  }, "Needs Correction"), /*#__PURE__*/React.createElement("option", {
    value: "REJECTED"
  }, "Rejected")))), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 shadow-sm bg-white overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left border-collapse text-xs"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "border-b border-gray-100 text-gray-400 uppercase"
  }, /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3"
  }, "Application Number"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3"
  }, "Institution & Applicant"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3"
  }, "Uploaded By / Officer"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3"
  }, "Classification"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3"
  }, "AI Risk Score"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3"
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3"
  }, "Last Refresh"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-3 text-right"
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-50"
  }, filteredApplications.map(app => /*#__PURE__*/React.createElement("tr", {
    key: app.id,
    className: "hover:bg-gray-50 transition"
  }, /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-3 font-mono font-bold text-forest-600 whitespace-nowrap"
  }, app.application_number), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-3 font-semibold text-gray-900"
  }, app.applicant_name), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-3 text-gray-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-medium text-xs text-forest-700"
  }, app.uploader_name || "Sunita Venkatesh (Officer)"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-gray-400"
  }, app.uploader_org || "National Reviewer")), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-3 text-gray-600 whitespace-nowrap"
  }, app.dossier_type), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-3 whitespace-nowrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: `px-2 py-0.5 rounded-full font-mono font-bold text-[10px] ${app.risk_score > 60 ? 'bg-red-100 text-red-800 border border-red-200' : app.risk_score > 30 ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'}`
  }, app.risk_score ? `${app.risk_score}% Risk` : "N/A")), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-3 whitespace-nowrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-1 rounded-full font-bold text-[11px] ${app.status === 'VERIFIED' ? 'bg-emerald-100 text-emerald-800' : app.status === 'REJECTED' || app.status === 'NEEDS_CORRECTION' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'}`
  }, app.status)), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-3 text-gray-500 whitespace-nowrap font-mono text-[11px]"
  }, app.updated_at || app.created_at || "Today"), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-4 text-right"
  }, userMode === 'manager' ? /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSelectedApp(app);
      setManagerRemarks(app.notes || '');
    },
    className: "px-3 py-1.5 bg-forest-600 text-white rounded-lg font-bold text-[11px] hover:bg-forest-700 shadow-sm"
  }, "Adjudicate") : /*#__PURE__*/React.createElement("button", {
    onClick: () => alert(`Application Details:\nStatus: ${app.status}\nNotes: ${app.notes || 'Under review'}`),
    className: "px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg font-bold text-[11px] hover:bg-gray-200"
  }, "View Status")))))))), activeTab === 'vault' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-forest-600"
  }, "Evidence Archive & Document Vault"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Cryptographically fingerprinted archives with SHA-256 validation")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3 w-full sm:w-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1 sm:w-64"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  }, /*#__PURE__*/React.createElement(Icons.Search, null)), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search filename or hash...",
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value),
    className: "w-full pl-9 pr-4 py-2 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-forest-600 focus:outline-none"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowStartVaultModal(true),
    className: "px-4 py-2 bg-forest-600 text-white text-xs font-bold rounded-xl shadow-sm hover:bg-forest-700 flex items-center space-x-1.5"
  }, /*#__PURE__*/React.createElement(Icons.Upload, null), /*#__PURE__*/React.createElement("span", null, "Start Archive Ingestion")))), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 shadow-sm bg-white overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left border-collapse text-xs"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "border-b border-gray-100 text-gray-400 uppercase"
  }, /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4"
  }, "File Name"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4"
  }, "Category"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4"
  }, "Size"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4"
  }, "AI Verdict"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4"
  }, "Authenticity"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4"
  }, "SHA-256 Digest"), /*#__PURE__*/React.createElement("th", {
    className: "py-3 px-4 text-right"
  }, "Certificate"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-50"
  }, filteredDocuments.map(doc => /*#__PURE__*/React.createElement("tr", {
    key: doc.id,
    className: "hover:bg-gray-50 transition"
  }, /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-4 font-semibold text-gray-900"
  }, doc.original_name), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-4 text-gray-600"
  }, doc.category), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-4 text-gray-400 font-mono"
  }, doc.file_size_kb, " KB"), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-0.5 rounded-full font-bold ${doc.verdict === 'REAL' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`
  }, doc.verdict === 'REAL' ? 'AUTHENTIC' : doc.verdict === 'FAKE' ? 'TAMPERED' : 'SUSPICIOUS')), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-4 font-bold text-forest-600"
  }, doc.authenticity_score, "%"), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-4 font-mono text-[10px] text-gray-400"
  }, doc.sha256_hash.slice(0, 18), "..."), /*#__PURE__*/React.createElement("td", {
    className: "py-3 px-4 text-right"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleOpenCertificate(doc.id),
    className: "px-3 py-1.5 bg-forest-50 text-forest-700 border border-forest-200 rounded-lg font-bold text-[11px] hover:bg-forest-100 flex items-center space-x-1 ml-auto"
  }, /*#__PURE__*/React.createElement(Icons.Award, null), /*#__PURE__*/React.createElement("span", null, "Official Seal"))))))))), activeTab === 'ai-verify' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-forest-50 to-white border border-forest-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "p-1.5 bg-forest-600 text-white rounded-lg text-xs"
  }, "\u26A1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-forest-900"
  }, "1-Click Live Presentation Demos"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-500"
  }, "Test automated tampering detection without manually finding files"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleLoadDemo('real'),
    className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition"
  }, "\uD83D\uDFE2 Authentic \u2014 APH Compliance Deed"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleLoadDemo('fake'),
    className: "px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-sm transition"
  }, "\uD83D\uDD34 Tampered \u2014 Tax Invoice Alert"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleLoadDemo('suspicious'),
    className: "px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg shadow-sm transition"
  }, "\uD83D\uDFE1 Survey Boundary \u2014 Needs Review"))), /*#__PURE__*/React.createElement("div", {
    className: "border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center bg-forest-50/20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 bg-forest-100 text-forest-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm"
  }, /*#__PURE__*/React.createElement(Icons.Upload, null)), /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-forest-600"
  }, "Upload Document for Authenticity Verification"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500 max-w-md mx-auto mb-6"
  }, "Multi-stage analysis: Error Level Analysis (ELA), EXIF tampering scan, Tesseract OCR text extraction, and APH clause compliance."), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleVerify,
    className: "max-w-md mx-auto space-y-4"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    required: true,
    accept: ".pdf,.png,.jpg,.jpeg",
    onChange: e => setSelectedFile(e.target.files[0]),
    className: "w-full text-xs text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-forest-600 file:text-white file:font-bold hover:file:bg-forest-700"
  }), /*#__PURE__*/React.createElement("select", {
    value: category,
    onChange: e => setCategory(e.target.value),
    className: "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-forest-600"
  }, /*#__PURE__*/React.createElement("option", null, "Land Registry & Infrastructure Deed"), /*#__PURE__*/React.createElement("option", null, "Regulatory Compliance Certificate (APH)"), /*#__PURE__*/React.createElement("option", null, "Financial Audit Statement"), /*#__PURE__*/React.createElement("option", null, "Accreditation & Faculty Credentials"), /*#__PURE__*/React.createElement("option", null, "Identity Document & Passport")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: isVerifying || !selectedFile,
    className: "w-full py-3 bg-forest-600 hover:bg-forest-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-md text-xs uppercase tracking-wider transition"
  }, isVerifying ? 'Running OpenCV ELA & Tesseract AI Inspection...' : 'Verify Document Authenticity'))), scanResult && /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 shadow-xl bg-white space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-4 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-forest-600"
  }, scanResult.filename), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-mono text-gray-400"
  }, "SHA-256: ", scanResult.sha256)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleOpenCertificate(scanResult.id),
    className: "px-3 py-1.5 bg-forest-50 text-forest-700 border border-forest-200 rounded-lg text-xs font-bold hover:bg-forest-100 flex items-center space-x-1"
  }, /*#__PURE__*/React.createElement(Icons.Award, null), /*#__PURE__*/React.createElement("span", null, "Generate Certificate")), /*#__PURE__*/React.createElement("div", {
    className: `px-4 py-1.5 rounded-full text-xs font-black flex items-center space-x-1.5 ${scanResult.verdict === 'REAL' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`
  }, /*#__PURE__*/React.createElement("span", null, scanResult.verdict === 'REAL' ? 'AUTHENTIC DOCUMENT (VERIFIED)' : 'TAMPERING DETECTED (NON-COMPLIANT)')))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gray-50 rounded-xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "Authenticity"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-black text-forest-600"
  }, scanResult.authenticity_score, "%")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gray-50 rounded-xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "ELA Noise Score"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-black text-gray-800"
  }, scanResult.ela_tamper_score, "%")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gray-50 rounded-xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "Template Match"), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-black text-forest-700"
  }, scanResult.template_match_score || '98.5%')), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gray-50 rounded-xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "Risk Level"), /*#__PURE__*/React.createElement("p", {
    className: `text-sm font-bold mt-2 ${scanResult.risk_level === 'LOW' ? 'text-emerald-600' : 'text-red-600'}`
  }, scanResult.risk_level, " RISK"))), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-xl p-5 bg-gray-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold text-forest-800 uppercase flex items-center space-x-1.5"
  }, /*#__PURE__*/React.createElement(Icons.Eye, null), /*#__PURE__*/React.createElement("span", null, "Explainable AI (XAI) Document Inspector")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-500"
  }, "Interactive bounding boxes locate exact tampered glyphs & APH clause violations.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setViewHeatmap(!viewHeatmap),
    className: "px-3 py-1 bg-white border border-gray-300 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-100 transition shadow-sm"
  }, viewHeatmap ? 'View Standard PDF' : 'View ELA Tamper Heatmap')), /*#__PURE__*/React.createElement("div", {
    className: `relative w-full h-64 rounded-xl border border-gray-300 p-6 flex flex-col justify-between overflow-hidden transition ${viewHeatmap ? 'bg-gray-900 text-green-400 font-mono' : 'bg-white text-gray-800'}`
  }, viewHeatmap && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-red-900/40 to-transparent pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold uppercase tracking-wider"
  }, scanResult.filename), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] opacity-75"
  }, "Classification: ", category), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] opacity-75"
  }, "Ingested Document Stream: 482.4 KB \u2022 SHA-256 Fingerprinted")), scanResult.fraud_flags.map((flag, idx) => {
    const box = flag.box || {
      top: 40 + idx * 20,
      left: 20,
      width: 60,
      height: 15,
      label: flag.rule
    };
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      onClick: () => setActiveDeficiency(flag),
      style: {
        top: `${box.top}%`,
        left: `${box.left}%`,
        width: `${box.width}%`,
        height: `${box.height}%`
      },
      className: "absolute border-2 border-dashed border-red-500 bg-red-500/20 rounded cursor-pointer flex items-center justify-between px-2 hover:bg-red-500/30 transition animate-pulse"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold bg-red-600 text-white px-1.5 py-0.5 rounded"
    }, box.label), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-mono text-red-900 bg-white/80 px-1 rounded"
    }, "Click to View Clause"));
  }), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-200/50 pt-2 flex justify-between text-[10px] opacity-60"
  }, /*#__PURE__*/React.createElement("span", null, "Verified by VERIDOC AI Inspection Engine"), /*#__PURE__*/React.createElement("span", null, "Timestamp: ", new Date().toLocaleTimeString()))), activeDeficiency && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 animate-fadeIn"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold"
  }, "Violated Regulation: ", activeDeficiency.clause), /*#__PURE__*/React.createElement("p", {
    className: "mt-0.5"
  }, activeDeficiency.detail))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gray-50 rounded-xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase mb-2"
  }, "Tesseract OCR Text Extraction"), /*#__PURE__*/React.createElement("pre", {
    className: "text-xs text-gray-700 whitespace-pre-wrap font-mono max-h-36 overflow-y-auto bg-white p-3 border border-gray-200 rounded-lg"
  }, scanResult.ocr_text)), scanResult.fraud_flags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-red-50 border border-red-200 rounded-xl"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold text-red-800 uppercase mb-2 flex items-center space-x-1.5"
  }, /*#__PURE__*/React.createElement(Icons.AlertCircle, null), /*#__PURE__*/React.createElement("span", null, "Tampering Flags & APH Clause Deficiencies")), /*#__PURE__*/React.createElement("ul", {
    className: "text-xs text-red-700 space-y-1"
  }, scanResult.fraud_flags.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("strong", null, f.rule), " (", f.clause, "): ", f.detail)))))), activeTab === 'digilocker' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-gray-100 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-forest-600 flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(Icons.DigiLocker, null), /*#__PURE__*/React.createElement("span", null, "DigiLocker & National Government Gateway")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1"
  }, "Direct integration with Government of India National Academic Depository & e-KYC Repositories.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-700"
  }, "Pull Verified e-Document via DigiLocker"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleDigiLockerPull,
    className: "space-y-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold text-gray-600 uppercase mb-1"
  }, "Document Type"), /*#__PURE__*/React.createElement("select", {
    value: digiDocType,
    onChange: e => setDigiDocType(e.target.value),
    className: "w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-forest-600"
  }, /*#__PURE__*/React.createElement("option", {
    value: "aadhaar"
  }, "UIDAI Aadhaar (XML e-KYC)"), /*#__PURE__*/React.createElement("option", {
    value: "pan"
  }, "Income Tax PAN Card Verification"), /*#__PURE__*/React.createElement("option", {
    value: "degree"
  }, "National Academic Degree / Diploma"), /*#__PURE__*/React.createElement("option", {
    value: "land_record"
  }, "State Cadastral Land Registration Title"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold text-gray-600 uppercase mb-1"
  }, "Government Identifier / Roll Number"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: digiIdNumber,
    onChange: e => setDigiIdNumber(e.target.value),
    className: "w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-600",
    placeholder: "e.g. 9812-4412-8801 or PAN #AAATA4912K"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: digiLoading,
    className: "w-full py-2.5 bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl shadow-sm text-xs transition uppercase tracking-wider flex items-center justify-center space-x-2"
  }, digiLoading ? /*#__PURE__*/React.createElement("span", null, "Querying Government Gateway...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icons.DigiLocker, null), /*#__PURE__*/React.createElement("span", null, "Execute DigiLocker Consent Pull"))))), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 bg-forest-50/30 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-800"
  }, "DigiLocker Verified Credential"), digiResult && /*#__PURE__*/React.createElement("span", {
    className: "bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]"
  }, "DIGITALLY SIGNED")), digiResult ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 text-xs bg-white p-4 rounded-xl border border-forest-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b border-gray-100 pb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500"
  }, "Issuer Authority:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-gray-900"
  }, digiResult.issuer)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b border-gray-100 pb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500"
  }, "Citizen / Institute:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-forest-700"
  }, digiResult.verified_name)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b border-gray-100 pb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500"
  }, "Masked ID:"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-gray-700"
  }, digiResult.identifier_masked)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b border-gray-100 pb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500"
  }, "Digital Signature:"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] text-emerald-700 font-bold"
  }, digiResult.digital_signature)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500 block text-[10px]"
  }, "DigiLocker URI:"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] text-gray-600 break-all"
  }, digiResult.document_uri))) : /*#__PURE__*/React.createElement("div", {
    className: "text-center py-10 text-gray-400"
  }, /*#__PURE__*/React.createElement(Icons.DigiLocker, null), /*#__PURE__*/React.createElement("p", {
    className: "text-xs mt-2"
  }, "Enter credentials and execute pull to inspect live government certificates."))), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 mt-4"
  }, "Protected by OAuth 2.0 PKCE and SHA-256 Consent Architecture.")))), activeTab === 'biometrics' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-gray-100 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-forest-600 flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(Icons.Face, null), /*#__PURE__*/React.createElement("span", null, "Biometric Face Match & Anti-Spoof Liveness Engine")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1"
  }, "PyTorch ArcFace deep learning embeddings match live applicant selfies with photo on official identity documents.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleBiometricTest('match'),
    className: `p-4 rounded-2xl border text-left transition ${bioMode === 'match' && bioResult ? 'border-emerald-500 bg-emerald-50/50' : 'border-gray-200 bg-white hover:border-emerald-300'}`
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xs text-emerald-800"
  }, "\uD83D\uDFE2 Test Genuine Match"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-500 mt-1"
  }, "Selfie matches ID photo + High Liveness (0% Spoof)")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleBiometricTest('mismatch'),
    className: `p-4 rounded-2xl border text-left transition ${bioMode === 'mismatch' && bioResult ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-white hover:border-red-300'}`
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xs text-red-800"
  }, "\uD83D\uDD34 Test Face Mismatch"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-500 mt-1"
  }, "Different person detected Cosine distance > 0.65")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleBiometricTest('spoof'),
    className: `p-4 rounded-2xl border text-left transition ${bioMode === 'spoof' && bioResult ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 bg-white hover:border-amber-300'}`
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-xs text-amber-800"
  }, "\uD83D\uDFE1 Test Photo Spoofing"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-500 mt-1"
  }, "2D screen / print attack detected by Liveness Filter"))), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative border-2 border-dashed border-forest-300 rounded-2xl p-6 bg-forest-50/20 text-center flex flex-col items-center justify-center h-64 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-24 rounded-full border-4 border-forest-600 flex items-center justify-center bg-white shadow-md mb-2 relative"
  }, /*#__PURE__*/React.createElement(Icons.Face, null), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 rounded-full border border-forest-400 animate-ping opacity-25"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-forest-900"
  }, "Live Applicant Selfie Feed"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-500 mt-1"
  }, "68 Facial Landmark Points Active"), /*#__PURE__*/React.createElement("span", {
    className: "mt-2 px-2.5 py-0.5 bg-forest-100 text-forest-800 text-[10px] font-mono font-bold rounded-full"
  }, "Anti-Spoofing: Active")), /*#__PURE__*/React.createElement("div", {
    className: "relative border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-gray-50 text-center flex flex-col items-center justify-center h-64"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-24 rounded-xl border-2 border-gray-400 flex items-center justify-center bg-white shadow-md mb-2"
  }, /*#__PURE__*/React.createElement(Icons.FileText, null)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-gray-800"
  }, "Document Extracted Portrait"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-500 mt-1"
  }, "Passport / Aadhaar Face Crop (180x220px)"), /*#__PURE__*/React.createElement("span", {
    className: "mt-2 px-2.5 py-0.5 bg-gray-200 text-gray-700 text-[10px] font-mono font-bold rounded-full"
  }, "Resolution: 300 DPI"))), bioResult && /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold text-forest-800 uppercase"
  }, "Biometric Evaluation Verdict"), /*#__PURE__*/React.createElement("span", {
    className: `px-3 py-1 rounded-full text-xs font-black ${bioResult.status_code === 'PASSED' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`
  }, bioResult.verdict)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white rounded-lg border border-gray-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-400 block font-bold"
  }, "Face Match Score"), /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-black text-forest-700"
  }, bioResult.match_confidence, "%")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white rounded-lg border border-gray-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-400 block font-bold"
  }, "Liveness Score"), /*#__PURE__*/React.createElement("span", {
    className: `text-lg font-black ${bioResult.liveness_score > 50 ? 'text-emerald-600' : 'text-red-600'}`
  }, bioResult.liveness_score, "%")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white rounded-lg border border-gray-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-400 block font-bold"
  }, "Spoof Attack Detected"), /*#__PURE__*/React.createElement("span", {
    className: `text-sm font-bold block mt-1 ${bioResult.spoof_detected ? 'text-red-600' : 'text-emerald-600'}`
  }, bioResult.spoof_detected ? 'YES (FLAGGED)' : 'NO (PASSED)'))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-700 pt-2 border-t border-gray-200"
  }, /*#__PURE__*/React.createElement("strong", null, "AI Analysis:"), " ", bioResult.explanation)))), activeTab === 'template-compare' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-gray-100 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-forest-600 flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(Icons.Compare, null), /*#__PURE__*/React.createElement("span", null, "Master Template Overlay & Layout Discrepancy Inspector")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1"
  }, "Compares uploaded filings with official Government Gazette master templates to flag shifted signatures and altered fonts.")), templateComparison && /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-gray-500 uppercase"
  }, "Target Template"), /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-700"
  }, templateComparison.master_template_name)), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-gray-500 uppercase"
  }, "Template Geometric Fit"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-black text-forest-600"
  }, templateComparison.comparison_score, "%"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 pt-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-gray-700 uppercase"
  }, "Detected Structural Discrepancies:"), templateComparison.discrepancies.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-3 bg-amber-50/50 border border-amber-200 rounded-xl flex items-center justify-between text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-amber-900"
  }, d.type), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-600 mt-0.5"
  }, d.location, " \u2014 ", d.delta)), /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 bg-amber-200 text-amber-900 text-[10px] font-bold rounded"
  }, d.verdict)))))), activeTab === 'fraud-intel' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-gray-100 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-forest-600 flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(Icons.FraudNet, null), /*#__PURE__*/React.createElement("span", null, "AI Fraud Intelligence Engine & Duplicate Graph")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1"
  }, "Scans cross-institutional datasets for duplicate land plots, reused faculty credentials, and syndicates.")), fraudIntelligence && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 border border-gray-200 rounded-2xl bg-white shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "Cross-Entity Risk"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-amber-600 mt-1"
  }, fraudIntelligence.overall_network_risk)), /*#__PURE__*/React.createElement("div", {
    className: "p-4 border border-gray-200 rounded-2xl bg-white shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "Fraud Detection Rate"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-forest-600 mt-1"
  }, fraudIntelligence.fraud_detection_rate)), /*#__PURE__*/React.createElement("div", {
    className: "p-4 border border-gray-200 rounded-2xl bg-white shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "Composite Risk Score"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-forest-700 mt-1"
  }, fraudIntelligence.composite_risk_score, " / 100"))), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-700"
  }, "Cross-Institutional Duplicate Detections"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, fraudIntelligence.cross_institutional_duplicates.map((item, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-4 bg-red-50/50 border border-red-200 rounded-xl space-y-2 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-red-900"
  }, item.institution), /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 bg-red-600 text-white font-bold rounded text-[10px]"
  }, item.risk, " (Match: ", item.confidence, "%)")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-700"
  }, "Collides with: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-gray-900"
  }, item.matched_with)), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-red-700 font-mono"
  }, "\u26A0 ", item.shared_attribute))))), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-700"
  }, "Suspicious Behavioral Patterns"), fraudIntelligence.suspicious_patterns.map((p, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-3 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-gray-800"
  }, p.pattern), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-400 block mt-0.5"
  }, "Frequency: ", p.frequency, " occurrences")), /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 bg-gray-200 text-gray-700 font-bold rounded text-[10px]"
  }, p.status)))))), activeTab === 'blockchain' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border-b border-gray-100 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-forest-600 flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(Icons.Blockchain, null), /*#__PURE__*/React.createElement("span", null, "Blockchain Verification Ledger & Public QR Resolver")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mt-1"
  }, "Every verified document is stamped with a SHA-256 Merkle proof anchored on the regulatory ledger.")), /*#__PURE__*/React.createElement("div", {
    className: "border border-gray-200 rounded-2xl p-6 bg-white shadow-sm space-y-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-bold text-forest-700"
  }, "Query Blockchain Ledger via Verification ID"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: blockchainLookupId,
    onChange: e => setBlockchainLookupId(e.target.value),
    className: "flex-1 px-4 py-2 border border-gray-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-forest-600",
    placeholder: "e.g. VDOC-CHAIN-99210-C"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleBlockchainLookup(blockchainLookupId),
    className: "px-4 py-2 bg-forest-600 text-white font-bold rounded-xl text-xs hover:bg-forest-700 transition"
  }, "Verify on Chain")), blockchainData && /*#__PURE__*/React.createElement("div", {
    className: "p-5 bg-forest-50/50 rounded-2xl border border-forest-200 space-y-3 text-xs animate-fadeIn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center border-b border-forest-200 pb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-forest-900"
  }, "Verification ID: ", blockchainData.verification_id), /*#__PURE__*/React.createElement("span", {
    className: "bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px]"
  }, blockchainData.tamper_status)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-500 uppercase block font-bold"
  }, "Block Height"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold text-forest-800"
  }, "#", blockchainData.block_number)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-500 uppercase block font-bold"
  }, "Timestamp"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-gray-700"
  }, blockchainData.timestamp)), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-500 uppercase block font-bold"
  }, "Merkle Proof Root"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] text-gray-700 break-all"
  }, blockchainData.merkle_root)), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-500 uppercase block font-bold"
  }, "Consensus Node"), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-800 font-semibold"
  }, blockchainData.validator_node)))))), activeTab === 'rules' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 max-w-4xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-forest-600"
  }, "Statutory Compliance Rules Engine"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "National Approval Process Handbook (APH 2026-27) Statutory Clauses and Automated Verification Checkpoints")), /*#__PURE__*/React.createElement("button", {
    onClick: handleRunComplianceAudit,
    className: "px-3.5 py-2 bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl text-xs transition shadow-sm"
  }, "Audit Missing Mandatory Fields")), complianceAudit && /*#__PURE__*/React.createElement("div", {
    className: "p-5 bg-amber-50/60 border border-amber-200 rounded-2xl space-y-3 text-xs animate-fadeIn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-amber-900"
  }, "AI Compliance Readiness: ", complianceAudit.overall_compliance_readiness), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-500"
  }, complianceAudit.regulation_evaluated)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-gray-700"
  }, "Missing Mandatory Field Checks:"), complianceAudit.mandatory_field_checks.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex justify-between p-2 bg-white rounded-lg border border-gray-200"
  }, /*#__PURE__*/React.createElement("span", null, f.field), /*#__PURE__*/React.createElement("span", {
    className: `font-bold text-[10px] px-2 py-0.5 rounded ${f.status === 'COMPLIANT' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`
  }, f.status)))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-amber-200"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-red-900"
  }, "Recommended Corrective Actions:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 space-y-1 text-gray-700 mt-1"
  }, complianceAudit.recommended_actions.map((act, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx
  }, act))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-4"
  }, complianceRules.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:border-forest-600 transition flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold text-xs bg-forest-100 text-forest-800 px-2 py-0.5 rounded"
  }, r.clause), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-sm text-gray-900"
  }, r.title), /*#__PURE__*/React.createElement("span", {
    className: "bg-red-50 text-red-700 text-[10px] font-bold px-2 py-0.2 rounded"
  }, r.status)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-600"
  }, r.description)), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-gray-400 uppercase font-bold block"
  }, "Evaluation Weight"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black text-forest-600"
  }, r.weight)))))), activeTab === 'new-application' && /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto border border-gray-200 rounded-2xl p-8 bg-white shadow-sm"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-forest-600 mb-1"
  }, "Submit New Regulatory Application"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 mb-6"
  }, "Register an application into the AI automated verification workflow"), appMsg && /*#__PURE__*/React.createElement("div", {
    className: "mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-bold"
  }, appMsg), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleCreateApp,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold text-forest-600 uppercase mb-1"
  }, "Applicant / Institution Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "e.g. Apex Institute of Science & Technology",
    className: "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-forest-600 focus:outline-none",
    value: appName,
    onChange: e => setAppName(e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold text-forest-600 uppercase mb-1"
  }, "Application Classification"), /*#__PURE__*/React.createElement("select", {
    value: appClassification,
    onChange: e => setAppClassification(e.target.value),
    className: "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-forest-600 focus:outline-none"
  }, /*#__PURE__*/React.createElement("option", null, "Affiliation Filing"), /*#__PURE__*/React.createElement("option", null, "Land Registry & Infrastructure"), /*#__PURE__*/React.createElement("option", null, "Regulatory APH Compliance Filing"), /*#__PURE__*/React.createElement("option", null, "Accreditation & Faculty Credentials"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold text-forest-600 uppercase mb-1"
  }, "Application Notes / Stipulations"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Remarks for verification committee...",
    className: "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-forest-600 focus:outline-none",
    value: appNotes,
    onChange: e => setAppNotes(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-3 bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl shadow-md text-xs uppercase tracking-wider transition"
  }, "Submit Application for Verification"))))), /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-6 right-6 z-50"
  }, !chatOpen ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setChatOpen(true),
    className: "p-3.5 bg-forest-600 hover:bg-forest-700 text-white rounded-full shadow-2xl flex items-center space-x-2 transition transform hover:scale-105",
    title: "Open AI Regulatory Copilot"
  }, /*#__PURE__*/React.createElement(Icons.Chat, null), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold pr-1 hidden sm:inline"
  }, "AI Regulatory Assistant")) : /*#__PURE__*/React.createElement("div", {
    className: "w-80 sm:w-96 bg-white border border-gray-200 rounded-3xl shadow-2xl flex flex-col h-96 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-forest-600 text-white p-3.5 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement(Icons.Chat, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold leading-tight"
  }, "AI Regulatory Copilot"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-forest-200"
  }, "APH 2026-27 Knowledge Engine"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setChatOpen(false),
    className: "text-white hover:text-gray-200 font-bold text-lg"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 p-3 overflow-y-auto space-y-2.5 custom-scroll text-xs"
  }, chatMessages.map((msg, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `p-2.5 rounded-2xl max-w-[85%] whitespace-pre-line ${msg.sender === 'user' ? 'bg-forest-600 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`
  }, msg.text))), chatLoading && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 bg-gray-100 rounded-2xl text-[11px] text-gray-500 animate-pulse"
  }, "Evaluating statutory clauses..."))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSendChat,
    className: "p-2 border-t border-gray-100 flex gap-2 bg-gray-50"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: chatInput,
    onChange: e => setChatInput(e.target.value),
    placeholder: "Ask about APH rules or missing info...",
    className: "flex-1 px-3 py-1.5 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-forest-600 focus:outline-none"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "px-3 py-1.5 bg-forest-600 text-white rounded-xl text-xs font-bold hover:bg-forest-700"
  }, "Send")))), selectedApp && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-forest-600"
  }, "Officer Adjudication Workbench"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "Application #", selectedApp.application_number)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSelectedApp(null),
    className: "text-gray-400 hover:text-gray-600 text-xl font-bold"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-gray-50 rounded-xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-gray-800"
  }, selectedApp.applicant_name), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 mt-0.5"
  }, "Classification: ", selectedApp.dossier_type), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "Current Status: ", /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-forest-600"
  }, selectedApp.status))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold text-forest-600 uppercase mb-1"
  }, "Verification Directive / Remarks"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Enter official committee findings, compliance stipulations, or deficiency details...",
    className: "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-forest-600 focus:outline-none",
    value: managerRemarks,
    onChange: e => setManagerRemarks(e.target.value)
  })), decisionMsg && /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-emerald-50 text-emerald-800 font-bold rounded-xl text-center"
  }, decisionMsg), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-gray-100 grid grid-cols-3 gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleManagerDecision('VERIFIED'),
    className: "py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm text-center"
  }, "\u2713 Approve (Verify)"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleManagerDecision('NEEDS_CORRECTION'),
    className: "py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-sm text-center"
  }, "\u26A0 Request Correction"), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleManagerDecision('REJECTED'),
    className: "py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-sm text-center"
  }, "\u2715 Reject Tampered"))))), certificateData && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-gray-100 relative"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCertificateData(null),
    className: "absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl font-bold"
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    id: "printable-certificate",
    className: "border-4 border-double border-forest-600 p-8 rounded-2xl bg-white space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center space-y-2 border-b border-gray-200 pb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 bg-forest-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-md"
  }, /*#__PURE__*/React.createElement(Icons.Shield, null)), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-black text-forest-600 tracking-wide uppercase"
  }, "Official Certificate of Document Verification"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500 font-semibold tracking-wider uppercase"
  }, "Republic Regulatory Verification Commission \u2022 Document Integrity Division"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-mono font-bold text-forest-700"
  }, "Verification ID: ", certificateData.verification_id)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-xs text-gray-700 leading-relaxed"
  }, /*#__PURE__*/React.createElement("p", null, "This document officially certifies that the archive titled ", /*#__PURE__*/React.createElement("strong", {
    className: "text-gray-900"
  }, certificateData.document.original_name), " has undergone automated cryptographic inspection, Error Level Analysis (ELA), and optical parameter validation in compliance with regulatory standards."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 uppercase font-bold"
  }, "Document Category"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-gray-900"
  }, certificateData.document.category)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 uppercase font-bold"
  }, "Authenticity Confidence"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-forest-600 text-lg"
  }, certificateData.document.authenticity_score, "%")), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 uppercase font-bold"
  }, "Cryptographic SHA-256 Digest"), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-[10px] text-gray-700 break-all"
  }, certificateData.document.sha256_hash)), /*#__PURE__*/React.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 uppercase font-bold"
  }, "Blockchain Proof Hash (Block #", certificateData.block_height, ")"), /*#__PURE__*/React.createElement("p", {
    className: "font-mono text-[10px] text-forest-800 break-all"
  }, certificateData.blockchain_hash))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center p-3 rounded-xl border border-gray-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "Official Verification Verdict:"), /*#__PURE__*/React.createElement("span", {
    className: `px-4 py-1 rounded-full text-xs font-black ${certificateData.document.verdict === 'REAL' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`
  }, certificateData.document.verdict === 'REAL' ? 'AUTHENTIC / APPROVED' : 'TAMPERED / REJECTED'))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-200 pt-6 flex justify-between items-end"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400 uppercase font-bold"
  }, "Authorized Officer"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-forest-900 mt-1"
  }, certificateData.authorized_officer), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-400"
  }, certificateData.issued_at)), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 border-2 border-forest-600 rounded-xl flex flex-col items-center justify-center font-mono text-[8px] text-forest-600 p-1 bg-forest-50/50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "[QR VALID]"), /*#__PURE__*/React.createElement("span", {
    className: "text-[7px] text-gray-500 mt-1"
  }, "SCAN TO VERIFY"))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex justify-end space-x-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    className: "px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-1.5"
  }, /*#__PURE__*/React.createElement(Icons.Printer, null), /*#__PURE__*/React.createElement("span", null, "Print Official Certificate")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCertificateData(null),
    className: "px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl"
  }, "Close")))), showStartVaultModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-forest-600"
  }, "Start Evidence Archive Vault Ingestion"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowStartVaultModal(false),
    className: "text-gray-400 hover:text-gray-600 text-xl font-bold"
  }, "\xD7")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500 mb-6"
  }, "Instantly index and store a compliance record in the cryptographic vault."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setShowStartVaultModal(false);
      setActiveTab('ai-verify');
    },
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold text-forest-600 uppercase mb-1"
  }, "Archive Classification"), /*#__PURE__*/React.createElement("select", {
    className: "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs bg-white"
  }, /*#__PURE__*/React.createElement("option", null, "Land Registry & Infrastructure Deed"), /*#__PURE__*/React.createElement("option", null, "Regulatory Compliance Certificate (APH)"), /*#__PURE__*/React.createElement("option", null, "Financial Audit Statement"), /*#__PURE__*/React.createElement("option", null, "Accreditation & Faculty Credentials"), /*#__PURE__*/React.createElement("option", null, "Identity Document & Passport"))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-3 bg-forest-600 hover:bg-forest-700 text-white font-bold rounded-xl text-xs uppercase"
  }, "Proceed to Document Upload")))), showTechModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto custom-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-black text-forest-600"
  }, "System Architecture & Verification Workflow"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "End-to-End Hand-off Protocol based on APH 2026-27 Specifications")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowTechModal(false),
    className: "text-gray-400 hover:text-gray-600 text-2xl font-bold"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 text-xs text-gray-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-3"
  }, [{
    step: '1. Application Upload',
    desc: 'User submits application and supporting documents (PDFs, scans, structural drawings).'
  }, {
    step: '2. OCR / Text Extraction',
    desc: 'Extracts text and key parameters using Tesseract OCR, OpenCV, and LayoutLMv3.'
  }, {
    step: '3. Application Validation',
    desc: 'Checks missing fields, incorrect formats, and cross-field information mismatches.'
  }, {
    step: '4. Document Authentication',
    desc: 'Error Level Analysis (ELA), digital signatures, and DigiLocker authorized verification.'
  }, {
    step: '5. Regulatory Compliance Rules',
    desc: 'Checks applicable APH regulations, required certificates, and validity dates.'
  }, {
    step: '6. AI Risk Assessment',
    desc: 'Identifies suspicious patterns, assigns risk score (0-100%), and categorizes risk level.'
  }, {
    step: '7. Low Risk & Manual Review',
    desc: 'Low-risk items proceed automatically; suspicious cases route to appointed officers.'
  }, {
    step: '8. Report & Secure Audit',
    desc: 'Generates verification report, tamper notices, and immutable AES audit records.'
  }].map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-3 bg-gray-50 rounded-xl border border-gray-200"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-forest-700"
  }, s.step), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-gray-600 mt-0.5"
  }, s.desc)))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-200 pt-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-sm text-forest-800 mb-3"
  }, "Key Software & Technologies Implemented"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-forest-50 rounded-xl border border-forest-200"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "Frontend & 3D"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-forest-800 text-xs mt-1"
  }, "React 18 + Three.js"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-500"
  }, "Tailwind CSS, WebGL 3D")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-forest-50 rounded-xl border border-forest-200"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "Backend"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-forest-800 text-xs mt-1"
  }, "Python Full-Stack"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-500"
  }, "FastAPI/Flask + Redis Queue")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-forest-50 rounded-xl border border-forest-200"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "AI / ML & Biometrics"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-forest-800 text-xs mt-1"
  }, "PyTorch + OpenCV"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-500"
  }, "ArcFace Liveness + ELA")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-forest-50 rounded-xl border border-forest-200"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-gray-400 uppercase"
  }, "Security & DB"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-forest-800 text-xs mt-1"
  }, "Blockchain + OAuth2"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-gray-500"
  }, "PostgreSQL, DigiLocker API"))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex justify-end"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowTechModal(false),
    className: "px-4 py-2 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs rounded-xl"
  }, "Close Architecture")))));
}
(function() {
  function mountVeriDoc() {
    var rootEl = document.getElementById('root');
    if (!rootEl) return;
    try {
      if (window.ReactDOM && typeof ReactDOM.createRoot === 'function') {
        var root = ReactDOM.createRoot(rootEl);
        root.render(React.createElement(App, null));
      } else if (window.ReactDOM && typeof ReactDOM.render === 'function') {
        ReactDOM.render(React.createElement(App, null), rootEl);
      }
    } catch (err) {
      console.error('VeriDoc mount error:', err);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountVeriDoc);
  } else {
    mountVeriDoc();
  }
})();