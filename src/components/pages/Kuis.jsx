import React, { useState } from 'react';
import { terminalQuizQuestions } from '../../data/siteData';

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const items = terminalQuizQuestions;

export default function Kuis() {
  const [active, setActive] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const current = items[active];
  const total = items.length;
  const chosen = answers[current.id];
  const isFirst = active === 0;
  const isLast = active === total - 1;

  const select = (idx) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [current.id]: idx }));
    setError(false);
  };

  const goNext = () => {
    if (chosen === undefined) { setError(true); return; }
    setError(false);
    setActive((p) => Math.min(p + 1, total - 1));
  };

  const goPrev = () => {
    setError(false);
    setActive((p) => Math.max(p - 1, 0));
  };

  const handleSubmit = () => {
    if (chosen === undefined) { setError(true); return; }
    setSubmitted(true);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    setActive(0);
    setError(false);
  };

  const score = submitted
    ? items.filter((q) => answers[q.id] === q.correctIndex).length
    : 0;

  if (submitted) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="qs-root">
        <div className="qs-inner qs-inner-centered">
          <div className="qs-score-label">Skor Akhir</div>
          <div className="qs-score-big">{pct}%</div>
          <div className="qs-cards-row">
            {items.map((q, i) => {
              const correct = answers[q.id] === q.correctIndex;
              return (
                <div key={q.id} className={`qs-result-card ${correct ? 'qs-card-ok' : 'qs-card-no'}`}>
                  <span className="qs-card-icon">{correct ? <CheckIcon /> : <CrossIcon />}</span>
                  <span className="qs-card-num">Soal {i + 1}</span>
                </div>
              );
            })}
          </div>
          <div className="qs-score-ratio">{score} / {total}</div>
          <div className="qs-actions">
            <span />
            <button type="button" className="qs-btn-primary" onClick={reset}>Ulangi Kuis</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="qs-root">
      <div className="qs-inner">
        <div className="qs-step-label">Soal {active + 1} dari {total}</div>
        <div className="qs-prompt">{current.question}</div>

        <div className="qs-choices">
          {current.options.map((opt, idx) => (
            <label key={idx} className={`qs-choice ${chosen === idx ? 'qs-choice-selected' : ''}`}>
              <input
                type="radio"
                name={current.id}
                value={idx}
                checked={chosen === idx}
                onChange={() => select(idx)}
                className="qs-radio"
              />
              <span className="qs-dot">
                <span className="qs-dot-inner" />
              </span>
              <span className="qs-choice-text">{opt}</span>
            </label>
          ))}
        </div>

        {error && <div className="qs-error">Pilih salah satu jawaban untuk melanjutkan.</div>}

        <div className="qs-actions">
          {!isFirst ? (
            <button type="button" className="qs-btn-secondary" onClick={goPrev}>Sebelumnya</button>
          ) : <span />}
          {isLast ? (
            <button type="button" className="qs-btn-primary" onClick={handleSubmit}>Kirim Jawaban</button>
          ) : (
            <button type="button" className="qs-btn-primary" onClick={goNext}>Berikutnya</button>
          )}
        </div>
      </div>
    </div>
  );
}
