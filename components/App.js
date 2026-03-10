import { useState } from "react";

const phases = [
  {
    id: 1,
    label: "PHASE 01",
    title: "Problem Deconstruction",
    subtitle: "Player Identification & Game Parameters",
    color: "#FF4D00",
    content: {
      overview: "The traditional web dev agency exists inside a multi-player adversarial game where the rules are being rewritten mid-match. This isn't a market shift — it's a phase transition. Let's map the board.",
      players: [
        {
          name: "YOU",
          role: "Traditional Web Dev Agency",
          power: 45,
          description: "Skilled human capital, client relationships, domain expertise. Constrained by hourly billing models and high labor costs.",
          motivation: "Revenue preservation, relevance, survival",
          threat: "SELF"
        },
        {
          name: "AI PLATFORMS",
          role: "Wix, Squarespace, Framer AI, v0.dev",
          power: 85,
          description: "Compressing commodity work to near-zero cost. Democratizing 'good enough' for SMB clients.",
          motivation: "Market capture, subscription ARR",
          threat: "HIGH"
        },
        {
          name: "AI-NATIVE AGENCIES",
          role: "Competitors using AI as leverage",
          power: 70,
          description: "Same outputs as you, 10x faster, 60% cheaper. Born without your cost structure.",
          motivation: "Market share, disruption arbitrage",
          threat: "CRITICAL"
        },
        {
          name: "ENTERPRISE CLIENTS",
          role: "Mid-to-large buyers",
          power: 60,
          description: "Increasingly sophisticated, demanding more for less, longer sales cycles.",
          motivation: "Risk reduction, ROI, compliance",
          threat: "NEUTRAL"
        },
        {
          name: "SMB CLIENTS",
          role: "Small business buyers",
          power: 30,
          description: "Price-sensitive, defecting to AI platforms rapidly. Low switching costs.",
          motivation: "Cost minimization, speed",
          threat: "DEFECTING"
        }
      ]
    }
  },
  {
    id: 2,
    label: "PHASE 02",
    title: "Incentive Mapping",
    subtitle: "Payoff Matrix & Information Asymmetries",
    color: "#FFB800",
    content: {
      overview: "Every player is optimizing. SMB clients defect to Wix the moment quality crosses 'good enough.' Enterprise clients won't — they're optimizing for risk, compliance, integration complexity. This asymmetry is your entire strategic opportunity.",
      matrix: [
        { scenario: "You maintain status quo", you: -40, aiPlatforms: +85, aiAgencies: +70, smb: +60, enterprise: -20, verdict: "LOSE" },
        { scenario: "You adopt AI tools internally", you: +30, aiPlatforms: +20, aiAgencies: +10, smb: +10, enterprise: +30, verdict: "SURVIVE" },
        { scenario: "You verticalize into 1-2 industries", you: +65, aiPlatforms: -10, aiAgencies: -15, smb: -30, enterprise: +70, verdict: "WIN" },
        { scenario: "You productize a SaaS offering", you: +80, aiPlatforms: -20, aiAgencies: -20, smb: +40, enterprise: +50, verdict: "WIN BIG" },
        { scenario: "You pivot to AI implementation consulting", you: +75, aiPlatforms: +30, aiAgencies: -30, smb: -10, enterprise: +80, verdict: "WIN BIG" }
      ],
      asymmetries: [
        { type: "Information Edge", detail: "You have client relationship data, domain context, and institutional knowledge AI can't access" },
        { type: "Trust Moat", detail: "Existing clients have switching costs. Enterprise legal/security review takes 6+ months" },
        { type: "Temporal Advantage", detail: "18-24 month window before AI-native agencies fully professionalize and capture your market" }
      ]
    }
  },
  {
    id: 3,
    label: "PHASE 03",
    title: "Strategy Space Analysis",
    subtitle: "Dominant Strategies & Dominated Options",
    color: "#00C2FF",
    content: {
      overview: "Classical game theory tells us to eliminate weakly dominated strategies first. Three paths are dominated — they lose in every scenario. Two paths survive.",
      dominated: [
        { strategy: "Premium pricing on commodity work", reason: "AI undercuts you on quality-to-cost ratio within 18 months. Dominated by any AI-augmented competitor." },
        { strategy: "Competing on speed/volume", reason: "Infinite-scale AI systems beat finite human teams on throughput. Strictly dominated." },
        { strategy: "Broad generalist positioning", reason: "No moat. Easily replicated. You become a commodity in a market that commoditizes by design." }
      ],
      dominant: [
        {
          strategy: "Vertical Specialization",
          type: "DOMINANT",
          description: "Pick 1-2 industries (healthcare, fintech, legal, construction). Become the agency that knows the regulations, integrations, and buyer psychology better than any AI can approximate.",
          why: "Creates information moat. Raises switching costs. Commands premium pricing. AI platforms can't vertically specialize by definition.",
          timeline: "0–18 months"
        },
        {
          strategy: "AI-Augmented Delivery + Consulting Layer",
          type: "DOMINANT",
          description: "Use AI to compress production costs by 60–70%, pocket the margin, and redirect human capital toward strategic consulting, AI implementation guidance, and complex integrations.",
          why: "You become a leverage-multiplied operation. Lower costs than yesterday, higher value per hour than ever. Clients pay for judgment, not keystrokes.",
          timeline: "0–12 months"
        }
      ]
    }
  },
  {
    id: 4,
    label: "PHASE 04",
    title: "Nash Equilibrium Analysis",
    subtitle: "Where the Market Stabilizes",
    color: "#00FF94",
    content: {
      overview: "In 5 years, the web development market reaches a new Nash Equilibrium. No player will want to unilaterally deviate from their position. Here's what that equilibrium looks like — and crucially, there are only two stable positions for agencies.",
      equilibrium: {
        description: "The market bifurcates into two stable nodes. Agencies in the middle — generalist, human-only, commodity-priced — face extinction. The Nash Equilibrium has no stable point for them.",
        nodes: [
          {
            position: "AI-NATIVE PRODUCTION SHOPS",
            margin: "Low",
            volume: "High",
            moat: "Operational efficiency",
            who: "Agencies that commoditize fully — AI-first, price-competitive, high-volume",
            viable: true
          },
          {
            position: "STRATEGIC DIGITAL PARTNERS",
            margin: "High",
            volume: "Low-Medium",
            moat: "Domain expertise + relationships",
            who: "Agencies that verticalize, consult, and sell outcomes not hours",
            viable: true
          },
          {
            position: "TRADITIONAL GENERALIST AGENCIES",
            margin: "Collapsing",
            volume: "Shrinking",
            moat: "None",
            who: "Status quo agencies with no differentiation",
            viable: false
          }
        ]
      },
      timeline: [
        { year: "2025", event: "SMB client defection accelerates. AI platforms hit 'good enough' threshold for 60% of traditional agency work." },
        { year: "2026", event: "AI-native competitors achieve professional-grade output. Price pressure becomes existential for generalists." },
        { year: "2027", event: "Market bifurcation completes. Middle-market agencies either specialize upmarket or collapse to price-competitive production." },
        { year: "2028", event: "Vertical specialists command 2-3x premium over commodity providers. Enterprise relationships become primary defensible asset." },
        { year: "2029-30", event: "New equilibrium stable. Winners are vertically dominant or operationally elite. Everything in between is gone." }
      ]
    }
  },
  {
    id: 5,
    label: "PHASE 05",
    title: "Strategic Recommendations",
    subtitle: "Optimal Moves & Implementation Sequence",
    color: "#C084FC",
    content: {
      overview: "You have an 18-month window before the equilibrium locks. The optimal strategy is a 3-horizon sequenced play. Delay is not neutral — it is negative. Every month in status quo is a move ceded to competitors.",
      horizons: [
        {
          label: "HORIZON 1",
          period: "Months 1–6",
          title: "Survive & Recapitalize",
          moves: [
            "Audit your client base — identify which 20% generate 80% of revenue and are irreplaceable",
            "Integrate AI tools (Cursor, v0, Claude) into every production workflow immediately — target 50% time reduction",
            "Fire SMB clients with <$5K LTV. Redirect capacity to higher-value relationships",
            "Pick your vertical: where do you have existing client concentration or personal expertise?"
          ],
          metric: "Gross margin improvement of 20–30% through AI-augmented production"
        },
        {
          label: "HORIZON 2",
          period: "Months 6–18",
          title: "Verticalize & Build Moat",
          moves: [
            "Develop vertical-specific case studies, compliance knowledge, integration expertise",
            "Reposition all marketing to chosen vertical — become the 'web agency for [industry]'",
            "Build retainer-based relationships — move from project to recurring revenue",
            "Hire one domain expert (not a developer) in your vertical to deepen advisory capability"
          ],
          metric: "60%+ revenue from vertical clients; 30%+ on retainer"
        },
        {
          label: "HORIZON 3",
          period: "Months 18–60",
          title: "Scale the Moat",
          moves: [
            "Productize your vertical knowledge — build templates, frameworks, and SaaS tools specific to your niche",
            "Consider a micro-acquisition of a struggling competitor in your vertical for client list",
            "Develop an AI implementation consulting practice — clients in your vertical need a guide",
            "Build thought leadership: speaking, content, community in your vertical"
          ],
          metric: "2–3x revenue per employee vs. traditional agency benchmark"
        }
      ]
    }
  },
  {
    id: 6,
    label: "PHASE 06",
    title: "Counter-Strategy & Adaptation",
    subtitle: "Dynamic Responses & Strategic Signaling",
    color: "#FF6B9D",
    content: {
      overview: "The game doesn't end when you move. Other players adapt. Here's how to stay ahead of counter-strategies and signal dominance in your chosen position.",
      counters: [
        {
          threat: "AI-native agency enters your vertical",
          response: "They have price. You have relationships and compliance depth. Double down on regulatory expertise and client intimacy. Make the moat wider, not cheaper.",
          urgency: "MEDIUM"
        },
        {
          threat: "Your vertical gets disrupted by AI platforms directly",
          response: "Your clients still need integration, customization, compliance guidance. Shift from 'we build' to 'we orchestrate.' The consultant role survives longer than the builder role.",
          urgency: "LOW (3+ years out)"
        },
        {
          threat: "Key clients defect to in-house AI teams",
          response: "Happen to be inside that process. Become the agency that trains their in-house team. Advisory retainer > project revenue. You win by being indispensable to the transition.",
          urgency: "HIGH"
        },
        {
          threat: "Talent drain — developers leave for AI-native companies",
          response: "Restructure team. You need fewer developers, more strategists and vertical experts. This is a feature, not a bug. Payroll cost drops while billing rate rises.",
          urgency: "MEDIUM"
        }
      ],
      signals: [
        "Publish vertical-specific research and benchmarks — signals expertise, creates inbound",
        "Take public positions on AI in your vertical — become the informed voice, not a fearful one",
        "Restructure contracts to outcomes-based pricing — signals confidence and aligns incentives with clients",
        "Strategic partnerships with vertical-specific SaaS tools — creates referral moat"
      ]
    }
  }
];

export default function GameTheoryDashboard() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);

  const phase = phases[activePhase];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080810",
      color: "#E8E8F0",
      fontFamily: "'Courier New', monospace",
      padding: "0",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Scanline overlay */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        pointerEvents: "none", zIndex: 1
      }} />

      {/* Grid background */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "linear-gradient(rgba(255,77,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none", zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{
          borderBottom: "1px solid rgba(255,77,0,0.3)",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(8,8,16,0.95)"
        }}>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#FF4D00", marginBottom: "4px" }}>
              ◈ STRATEGIC ANALYSIS SYSTEM v2.4
            </div>
            <div style={{ fontSize: "22px", fontWeight: "bold", letterSpacing: "2px" }}>
              GAME THEORY: WEB AGENCY 2025–2030
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#666" }}>STATUS</div>
            <div style={{ fontSize: "12px", color: "#FF4D00", letterSpacing: "2px" }}>◉ THREAT LEVEL: CRITICAL</div>
          </div>
        </div>

        {/* Phase Navigator */}
        <div style={{
          display: "flex",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(0,0,0,0.4)",
          overflowX: "auto"
        }}>
          {phases.map((p, i) => (
            <button
              key={p.id}
              onClick={() => { setActivePhase(i); setExpandedItem(null); }}
              style={{
                flex: "1",
                minWidth: "120px",
                padding: "14px 16px",
                background: activePhase === i ? `rgba(${p.color === "#FF4D00" ? "255,77,0" : p.color === "#FFB800" ? "255,184,0" : p.color === "#00C2FF" ? "0,194,255" : p.color === "#00FF94" ? "0,255,148" : p.color === "#C084FC" ? "192,132,252" : "255,107,157"},0.12)` : "transparent",
                border: "none",
                borderBottom: activePhase === i ? `2px solid ${p.color}` : "2px solid transparent",
                color: activePhase === i ? p.color : "#555",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                fontFamily: "'Courier New', monospace"
              }}
            >
              <div style={{ fontSize: "9px", letterSpacing: "2px", marginBottom: "3px" }}>{p.label}</div>
              <div style={{ fontSize: "11px", fontWeight: "bold" }}>{p.title}</div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ padding: "32px", maxWidth: "1200px", margin: "0 auto" }}>

          {/* Phase Header */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{
              display: "inline-block",
              padding: "4px 12px",
              border: `1px solid ${phase.color}`,
              color: phase.color,
              fontSize: "10px",
              letterSpacing: "3px",
              marginBottom: "12px"
            }}>
              {phase.label} // {phase.subtitle}
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px", letterSpacing: "1px" }}>
              {phase.title}
            </h2>
            <p style={{
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#B0B0C0",
              maxWidth: "800px",
              borderLeft: `3px solid ${phase.color}`,
              paddingLeft: "16px"
            }}>
              {phase.content.overview}
            </p>
          </div>

          {/* PHASE 1 - Players */}
          {activePhase === 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "16px" }}>
              {phase.content.players.map((player, i) => (
                <div key={i} style={{
                  border: `1px solid ${player.threat === "CRITICAL" ? "#FF4D00" : player.threat === "HIGH" ? "#FFB800" : player.threat === "DEFECTING" ? "#FF6B9D" : player.threat === "SELF" ? "#C084FC" : "rgba(255,255,255,0.1)"}`,
                  padding: "20px",
                  background: "rgba(255,255,255,0.02)",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute", top: "-1px", right: "16px",
                    background: "#080810",
                    padding: "0 8px",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: player.threat === "CRITICAL" ? "#FF4D00" : player.threat === "HIGH" ? "#FFB800" : player.threat === "DEFECTING" ? "#FF6B9D" : player.threat === "SELF" ? "#C084FC" : "#555"
                  }}>
                    {player.threat}
                  </div>
                  <div style={{ fontSize: "11px", color: "#888", letterSpacing: "2px", marginBottom: "4px" }}>PLAYER</div>
                  <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "4px" }}>{player.name}</div>
                  <div style={{ fontSize: "11px", color: "#666", marginBottom: "12px" }}>{player.role}</div>

                  {/* Power bar */}
                  <div style={{ marginBottom: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ fontSize: "9px", letterSpacing: "2px", color: "#666" }}>MARKET POWER</span>
                      <span style={{ fontSize: "9px", color: phase.color }}>{player.power}%</span>
                    </div>
                    <div style={{ height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "2px" }}>
                      <div style={{
                        height: "100%", width: `${player.power}%`,
                        background: `linear-gradient(90deg, ${phase.color}, ${phase.color}88)`,
                        borderRadius: "2px"
                      }} />
                    </div>
                  </div>

                  <p style={{ fontSize: "12px", color: "#888", lineHeight: "1.6", marginBottom: "8px" }}>{player.description}</p>
                  <div style={{ fontSize: "11px", color: "#555" }}>
                    <span style={{ color: "#444" }}>MOTIVATION: </span>{player.motivation}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PHASE 2 - Payoff Matrix */}
          {activePhase === 1 && (
            <div>
              <div style={{ overflowX: "auto", marginBottom: "32px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,184,0,0.3)" }}>
                      {["SCENARIO", "YOU", "AI PLATFORMS", "AI AGENCIES", "SMB CLIENTS", "ENTERPRISE", "VERDICT"].map(h => (
                        <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#FFB800", letterSpacing: "2px", fontSize: "9px", fontWeight: "normal" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {phase.content.matrix.map((row, i) => (
                      <tr key={i} style={{
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        background: row.verdict === "WIN BIG" ? "rgba(0,255,148,0.04)" : row.verdict === "WIN" ? "rgba(0,255,148,0.02)" : i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent"
                      }}>
                        <td style={{ padding: "12px 14px", color: "#D0D0E0" }}>{row.scenario}</td>
                        {[row.you, row.aiPlatforms, row.aiAgencies, row.smb, row.enterprise].map((val, j) => (
                          <td key={j} style={{
                            padding: "12px 14px", textAlign: "center",
                            color: val > 0 ? "#00FF94" : val < 0 ? "#FF4D00" : "#888",
                            fontWeight: "bold"
                          }}>
                            {val > 0 ? `+${val}` : val}
                          </td>
                        ))}
                        <td style={{ padding: "12px 14px" }}>
                          <span style={{
                            padding: "3px 8px",
                            fontSize: "9px",
                            letterSpacing: "1px",
                            border: `1px solid ${row.verdict === "WIN BIG" ? "#00FF94" : row.verdict === "WIN" ? "#00FF94" : row.verdict === "SURVIVE" ? "#FFB800" : "#FF4D00"}`,
                            color: row.verdict === "WIN BIG" ? "#00FF94" : row.verdict === "WIN" ? "#00FF94" : row.verdict === "SURVIVE" ? "#FFB800" : "#FF4D00"
                          }}>
                            {row.verdict}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
                {phase.content.asymmetries.map((a, i) => (
                  <div key={i} style={{
                    padding: "20px",
                    border: "1px solid rgba(255,184,0,0.2)",
                    background: "rgba(255,184,0,0.04)"
                  }}>
                    <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#FFB800", marginBottom: "8px" }}>INFORMATION ASYMMETRY</div>
                    <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "8px" }}>{a.type}</div>
                    <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.6" }}>{a.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PHASE 3 - Strategy Space */}
          {activePhase === 2 && (
            <div>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#FF4D00", marginBottom: "16px" }}>▼ ELIMINATED — WEAKLY DOMINATED STRATEGIES</div>
                <div style={{ display: "grid", gap: "12px" }}>
                  {phase.content.dominated.map((s, i) => (
                    <div key={i} style={{
                      padding: "16px 20px",
                      border: "1px solid rgba(255,77,0,0.2)",
                      background: "rgba(255,77,0,0.04)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px"
                    }}>
                      <div style={{ color: "#FF4D00", fontSize: "16px", flexShrink: 0 }}>✕</div>
                      <div>
                        <div style={{ fontWeight: "bold", marginBottom: "4px", textDecoration: "line-through", color: "#666" }}>{s.strategy}</div>
                        <div style={{ fontSize: "12px", color: "#666" }}>{s.reason}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#00C2FF", marginBottom: "16px" }}>▲ SURVIVING — DOMINANT STRATEGIES</div>
                <div style={{ display: "grid", gap: "16px" }}>
                  {phase.content.dominant.map((s, i) => (
                    <div key={i} style={{
                      padding: "24px",
                      border: `1px solid ${phase.color}`,
                      background: "rgba(0,194,255,0.04)",
                      position: "relative"
                    }}>
                      <div style={{
                        position: "absolute", top: "24px", right: "24px",
                        padding: "4px 10px",
                        background: "rgba(0,194,255,0.15)",
                        border: `1px solid ${phase.color}`,
                        color: phase.color,
                        fontSize: "9px",
                        letterSpacing: "2px"
                      }}>
                        {s.type} // {s.timeline}
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>{s.strategy}</div>
                      <p style={{ fontSize: "13px", color: "#B0B0C0", lineHeight: "1.7", marginBottom: "12px" }}>{s.description}</p>
                      <div style={{ fontSize: "12px", color: "#00C2FF", borderTop: "1px solid rgba(0,194,255,0.15)", paddingTop: "12px" }}>
                        <span style={{ color: "#555" }}>WHY THIS WINS: </span>{s.why}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PHASE 4 - Nash Equilibrium */}
          {activePhase === 3 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "40px" }}>
                {phase.content.equilibrium.nodes.map((node, i) => (
                  <div key={i} style={{
                    padding: "24px",
                    border: `1px solid ${node.viable ? "#00FF94" : "#FF4D00"}`,
                    background: node.viable ? "rgba(0,255,148,0.04)" : "rgba(255,77,0,0.04)",
                    position: "relative",
                    opacity: node.viable ? 1 : 0.6
                  }}>
                    {!node.viable && (
                      <div style={{
                        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(0,0,0,0.4)",
                        fontSize: "14px", letterSpacing: "4px", color: "#FF4D00",
                        pointerEvents: "none"
                      }}>
                        UNSTABLE
                      </div>
                    )}
                    <div style={{ fontSize: "9px", letterSpacing: "2px", color: node.viable ? "#00FF94" : "#FF4D00", marginBottom: "8px" }}>
                      {node.viable ? "◉ EQUILIBRIUM NODE" : "◎ NO STABLE POSITION"}
                    </div>
                    <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "12px", lineHeight: "1.4" }}>{node.position}</div>
                    <div style={{ display: "grid", gap: "6px", marginBottom: "12px" }}>
                      {[["MARGIN", node.margin], ["VOLUME", node.volume], ["MOAT", node.moat]].map(([k, v]) => (
                        <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
                          <span style={{ color: "#555" }}>{k}</span>
                          <span style={{ color: "#B0B0C0" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: "11px", color: "#666", lineHeight: "1.5" }}>{node.who}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#00FF94", marginBottom: "16px" }}>TIMELINE TO EQUILIBRIUM</div>
              <div style={{ position: "relative", paddingLeft: "24px" }}>
                <div style={{
                  position: "absolute", left: "11px", top: 0, bottom: 0,
                  width: "1px", background: "rgba(0,255,148,0.2)"
                }} />
                {phase.content.timeline.map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "20px", position: "relative" }}>
                    <div style={{
                      position: "absolute", left: "-20px", top: "4px",
                      width: "8px", height: "8px",
                      border: "1px solid #00FF94",
                      background: "#080810",
                      borderRadius: "50%"
                    }} />
                    <div style={{
                      minWidth: "80px",
                      fontSize: "12px",
                      color: "#00FF94",
                      fontWeight: "bold",
                      letterSpacing: "1px"
                    }}>{t.year}</div>
                    <div style={{ fontSize: "13px", color: "#888", lineHeight: "1.6" }}>{t.event}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PHASE 5 - Recommendations */}
          {activePhase === 4 && (
            <div style={{ display: "grid", gap: "20px" }}>
              {phase.content.horizons.map((h, i) => (
                <div key={i} style={{
                  border: `1px solid ${phase.color}33`,
                  background: "rgba(192,132,252,0.03)",
                  overflow: "hidden"
                }}>
                  <div style={{
                    padding: "16px 24px",
                    background: "rgba(192,132,252,0.08)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: `1px solid ${phase.color}22`
                  }}>
                    <div>
                      <div style={{ fontSize: "9px", letterSpacing: "3px", color: phase.color, marginBottom: "4px" }}>{h.label} // {h.period}</div>
                      <div style={{ fontSize: "16px", fontWeight: "bold" }}>{h.title}</div>
                    </div>
                    <div style={{ fontSize: "10px", color: "#555", textAlign: "right", maxWidth: "200px" }}>
                      TARGET: <span style={{ color: "#00FF94" }}>{h.metric}</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    {h.moves.map((move, j) => (
                      <div key={j} style={{
                        display: "flex", gap: "12px", marginBottom: "12px", alignItems: "flex-start"
                      }}>
                        <div style={{
                          minWidth: "20px", height: "20px",
                          border: `1px solid ${phase.color}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "9px", color: phase.color, flexShrink: 0, marginTop: "2px"
                        }}>{j + 1}</div>
                        <div style={{ fontSize: "13px", color: "#B0B0C0", lineHeight: "1.6" }}>{move}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PHASE 6 - Counter Strategies */}
          {activePhase === 5 && (
            <div>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#FF6B9D", marginBottom: "16px" }}>THREAT RESPONSE PROTOCOLS</div>
                <div style={{ display: "grid", gap: "16px" }}>
                  {phase.content.counters.map((c, i) => (
                    <div key={i} style={{
                      padding: "20px 24px",
                      border: `1px solid ${c.urgency === "HIGH" ? "#FF4D00" : c.urgency === "MEDIUM" ? "#FFB800" : "rgba(255,255,255,0.1)"}22`,
                      background: c.urgency === "HIGH" ? "rgba(255,77,0,0.04)" : "rgba(255,255,255,0.01)"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <div style={{ fontSize: "13px", fontWeight: "bold" }}>IF: {c.threat}</div>
                        <div style={{
                          padding: "2px 8px",
                          fontSize: "9px",
                          letterSpacing: "2px",
                          border: `1px solid ${c.urgency === "HIGH" ? "#FF4D00" : c.urgency === "MEDIUM" ? "#FFB800" : "#555"}`,
                          color: c.urgency === "HIGH" ? "#FF4D00" : c.urgency === "MEDIUM" ? "#FFB800" : "#555"
                        }}>
                          {c.urgency}
                        </div>
                      </div>
                      <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.7" }}>
                        <span style={{ color: "#FF6B9D" }}>THEN: </span>{c.response}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#FF6B9D", marginBottom: "16px" }}>STRATEGIC SIGNALING PLAYS</div>
                <div style={{ display: "grid", gap: "10px" }}>
                  {phase.content.signals.map((s, i) => (
                    <div key={i} style={{
                      padding: "14px 20px",
                      border: "1px solid rgba(255,107,157,0.15)",
                      fontSize: "13px",
                      color: "#B0B0C0",
                      display: "flex",
                      gap: "12px",
                      alignItems: "center"
                    }}>
                      <span style={{ color: "#FF6B9D", fontSize: "8px" }}>◈</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "10px",
          color: "#333",
          letterSpacing: "2px"
        }}>
          <div>GAME THEORY STRATEGIST // PENTAGON → SILICON VALLEY FRAMEWORK</div>
          <div style={{ display: "flex", gap: "8px" }}>
            {phases.map((p, i) => (
              <div
                key={i}
                onClick={() => { setActivePhase(i); setExpandedItem(null); }}
                style={{
                  width: "24px", height: "3px",
                  background: activePhase === i ? p.color : "rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
