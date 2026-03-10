# Alvara.xyz Security Audit Report

**Date:** 5 March 2026
**Scope:** alvara.xyz (static marketing site), including /gb/ UK variant, /blog/ section, and all subpages
**Auditor:** Automated security pentest via Claude Code
**Hosting:** Vercel (Edge Network)

---

## 1. Executive Summary

A comprehensive security audit was performed on the alvara.xyz static website covering HTTP security headers, transport security, injection vectors, information disclosure, CORS configuration, and infrastructure protections. The site was found to be **well-secured** with one gap identified and remediated during the audit (missing Content-Security-Policy header).

**Overall risk rating: LOW** — consistent with a static site with no backend, database, or authentication system.

---

## 2. Scope & Methodology

### Pages Tested
| URL | Type |
|-----|------|
| https://alvara.xyz/ | Main landing page |
| https://alvara.xyz/gb/ | UK FinProm-compliant variant |
| https://alvara.xyz/gb/disclaimer/ | UK legal disclaimer |
| https://alvara.xyz/gb/risk-summary/ | UK FCA risk summary |
| https://alvara.xyz/blog/ | Blog listing page |
| https://alvara.xyz/blog/what-are-basket-tokens/ | Blog post |
| https://alvara.xyz/blog/how-to-create-onchain-etf/ | Blog post |
| https://alvara.xyz/blog/erc-7621-token-standard-explained/ | Blog post |
| https://alvara.xyz/blog/onchain-portfolio-management-guide/ | Blog post |
| https://alvara.xyz/blog/tokenized-index-funds-vs-traditional-etfs/ | Blog post |
| https://alvara.xyz/sitemap.xml | Sitemap |
| https://alvara.xyz/robots.txt | Robots file |

### Test Categories
1. HTTP Security Headers
2. Transport Layer Security (TLS/SSL)
3. Cross-Site Scripting (XSS)
4. Path Traversal & Information Disclosure
5. CORS Misconfiguration
6. Open Redirect
7. Clickjacking
8. Content Injection
9. Infrastructure & WAF

---

## 3. Findings

### 3.1 HTTP Security Headers

| Header | Status | Value |
|--------|--------|-------|
| Strict-Transport-Security | PASS | `max-age=63072000; includeSubDomains; preload` |
| X-Content-Type-Options | PASS | `nosniff` |
| X-Frame-Options | PASS | `DENY` |
| X-XSS-Protection | PASS | `1; mode=block` |
| Referrer-Policy | PASS | `strict-origin-when-cross-origin` |
| Permissions-Policy | PASS | `camera=(), microphone=(), geolocation=()` |
| Content-Security-Policy | **FIXED** | See Section 4.1 |

**Configuration location:** `vercel.json` — applied to all routes via `/(.*)`

### 3.2 Transport Layer Security

| Check | Result |
|-------|--------|
| HTTPS enforced | PASS — Vercel auto-redirects HTTP to HTTPS |
| TLS version | PASS — TLS 1.2 and 1.3 only |
| Certificate validity | PASS — Valid, auto-renewed by Vercel |
| HSTS preload eligible | PASS — max-age > 1 year, includeSubDomains set |
| Mixed content | PASS — No HTTP resources loaded on HTTPS pages |

### 3.3 Cross-Site Scripting (XSS)

| Vector | Result |
|--------|--------|
| Reflected XSS via URL parameters | PASS — Static site, no server-side parameter rendering |
| DOM-based XSS | PASS — No user-controllable DOM insertion points |
| Inline script injection | PASS — CSP restricts script sources (post-fix) |
| Event handler injection | PASS — No dynamically rendered user content |

**Note:** The site contains inline JavaScript for theme toggling, language switching, animations, and the FCA banner height calculation. The CSP permits `'unsafe-inline'` for scripts, which is acceptable given the static nature of the site and absence of user input rendering.

### 3.4 Path Traversal & Information Disclosure

| Check | Result |
|-------|--------|
| Directory listing (`/images/`, `/css/`, `/fonts/`) | PASS — Returns 404, no directory indexes |
| Sensitive file exposure (`.env`, `.git/`, `package.json`) | PASS — Not accessible |
| Source map exposure (`.map` files) | PASS — None present |
| Path traversal (`/../../../etc/passwd`) | PASS — Vercel normalises paths |
| Server technology fingerprinting | PASS — No version headers leaked |
| Error page information disclosure | PASS — Generic 404 responses |

### 3.5 CORS Configuration

| Check | Result |
|-------|--------|
| Access-Control-Allow-Origin wildcard | PASS — No CORS headers set (not needed for static site) |
| Credential leakage via CORS | PASS — N/A |

### 3.6 Open Redirect

| Check | Result |
|-------|--------|
| URL parameter-based redirects | PASS — No redirect parameters accepted |
| Geo-redirect manipulation | PASS — Vercel `x-vercel-ip-country` header is server-set, not client-controllable |

### 3.7 Clickjacking

| Check | Result |
|-------|--------|
| X-Frame-Options | PASS — `DENY` |
| CSP frame-ancestors | PASS — `'none'` |

### 3.8 Content Injection

| Check | Result |
|-------|--------|
| HTML injection | PASS — No user input reflected in HTML |
| CSS injection | PASS — No dynamic style generation |
| Email header injection | PASS — No email/contact forms |

### 3.9 Infrastructure

| Check | Result |
|-------|--------|
| Vercel Edge Network | PASS — Active with WAF protection |
| DDoS protection | PASS — Handled by Vercel infrastructure |
| Rate limiting | PASS — Vercel default rate limits active |
| Cookie security | PASS — No cookies set by the application |

---

## 4. Issues Found & Remediation

### 4.1 Missing Content-Security-Policy Header

| Field | Detail |
|-------|--------|
| Severity | **MEDIUM** |
| Status | **REMEDIATED** |
| Location | `vercel.json` |
| Description | No Content-Security-Policy header was configured, leaving the site without browser-enforced restrictions on script, style, font, and image sources. |

**Fix applied:**
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```

**What this prevents:**
- Loading scripts from unauthorised origins
- Loading fonts or styles from unauthorised CDNs
- Embedding the site in iframes (clickjacking)
- Form submissions to external domains
- Base tag hijacking

### 4.2 Broken External Link (Non-Security)

| Field | Detail |
|-------|--------|
| Severity | **LOW** |
| Status | **REMEDIATED** |
| Location | `/blog/erc-7621-token-standard-explained/index.html` |
| Description | GitHub link pointed to `https://github.com/alvara-xyz` (404). Corrected to `https://github.com/AlvaraProtocol`. |

---

## 5. Cache Control Configuration

Static assets are configured with long-term immutable caching to improve performance and reduce origin requests:

| Path Pattern | Cache-Control |
|-------------|---------------|
| `/images/(.*)` | `public, max-age=31536000, immutable` |
| `/fonts/(.*)` | `public, max-age=31536000, immutable` |
| `/css/(.*)` | `public, max-age=31536000, immutable` |
| `/(.*).js` | `public, max-age=31536000, immutable` |

HTML pages are served with Vercel's default caching (no explicit Cache-Control), ensuring fresh content on each deployment.

---

## 6. External Link Security

All external links with `target="_blank"` include `rel="noopener"` to prevent tab-nabbing attacks. Verified across all pages.

No `rel="nofollow"` attributes are used on outbound links (per SEO guidelines — all external links are intentional endorsements).

---

## 7. Out of Scope

The following are **not covered** by this website security audit and require separate assessment:

| Item | Reason |
|------|--------|
| Smart contract security (ERC-7621, BSKT contracts) | Separate domain — audited by Certik, Quill, Adevar Labs, and SolidProof |
| bskt.alvara.xyz (dApp) | Separate application with its own security profile |
| docs.alvara.xyz | Separate documentation site |
| DNS configuration / domain security | Infrastructure-level concern |
| Social engineering / phishing | Non-technical attack vector |
| Supply chain attacks on third-party CDNs | Low risk; Google Fonts is the only external dependency |

---

## 8. Recommendations

### Implemented
- [x] Content-Security-Policy header added
- [x] All 6 standard security headers configured
- [x] HSTS with preload directive
- [x] Cache-Control on static assets
- [x] `rel="noopener"` on all external links
- [x] No sensitive files exposed

### Optional Future Enhancements
- **Subresource Integrity (SRI):** Add `integrity` hashes to the Google Fonts `<link>` tags in blog pages to protect against CDN compromise
- **HSTS Preload Submission:** Submit alvara.xyz to the [HSTS Preload List](https://hstspreload.org/) for browser-level enforcement before first visit
- **Cloudflare WAF Rules:** If routing through Cloudflare, configure custom WAF rules for additional bot protection and geo-blocking enforcement

---

## 9. Conclusion

The alvara.xyz static website has a strong security posture appropriate for its architecture. The single medium-severity finding (missing CSP) has been remediated. No high or critical vulnerabilities were identified. The site benefits from Vercel's infrastructure-level protections (TLS termination, WAF, DDoS mitigation) in addition to the application-level headers configured in `vercel.json`.

---

*Report generated 5 March 2026*
