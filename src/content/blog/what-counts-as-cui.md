---
title: "What Counts as CUI? The Question That Determines Your CMMC Scope"
description: "CUI is not just a label on a document. For defense contractors, it determines systems, vendors, evidence, cost, and CMMC scope."
pubDate: 2026-06-05
category: "CMMC 2.0"
tags: ["CMMC", "CUI", "GovCon", "Defense Contractors", "Scoping"]
readingTime: "4 min read"
featured: false
image: "../../assets/blog/what-counts-as-cui.png"
seoTitle: "What Counts as CUI? CMMC Scope for Defense Contractors | Proofyx"
seoDescription: "A practical guide to Controlled Unclassified Information and why CUI discovery determines CMMC Level 2 scope, systems, vendors, and evidence."
---

Most defense contractors ask the CUI question too late.

They start with tools, policies, control checklists, and assessment timelines. Then, halfway through CMMC readiness, someone asks the question that should have come first: "Where is our CUI?"

That question determines almost everything.

Controlled Unclassified Information is not just a marking on a file. For contractors, it is the boundary line around the compliance program. It determines which systems are in scope, which vendors create risk, which subcontractors need flow-down language, and whether the organization is dealing with basic safeguarding or CMMC Level 2.

If the CUI scope is wrong, the rest of the program is built on a guess.

### CUI Is a Scope Problem Before It Is a Security Problem

The official definition matters. The [CUI Registry](https://www.archives.gov/cui/registry/cui-glossary.html) describes CUI as government information, or information created for the government, that requires safeguarding or dissemination controls.

That definition is useful. It is not enough.

Is the engineering drawing CUI? What about the version converted into a supplier package? What about the screenshot pasted into a ticket? What about the email thread where a program manager explains the drawing? What about the backup copy retained by your managed service provider?

This is where CUI stops being a terminology issue and becomes an architecture issue.

If CUI enters Microsoft 365, cloud storage, CAD tools, ticketing systems, endpoints, backups, or a subcontractor portal, those systems may become part of the CMMC scope. The cost difference between "we have a few controlled files" and "CUI touches half our operating environment" is enormous.

### The Dangerous Assumption: "It Is Not Marked, So It Is Not CUI"

Clear markings help. They are not a complete strategy.

Contractors often receive government or prime contractor information that is inconsistently marked, poorly described, or separated from the context that explains why it is sensitive.

The wrong response is to treat missing markings as permission to ignore the issue.

A better response is to create a decision record. What was received? Who sent it? Which contract or task order does it support? Which CUI category might apply? Was clarification requested from the prime, contracting officer, or government customer?

This is the kind of discipline that separates a defensible compliance program from a folder full of assumptions.

### Where Contractors Actually Miss CUI

CUI rarely stays where it first arrives. That is the practical problem.

An engineering team receives a technical data package and stores it in a project folder. A program manager emails a portion of it to a subcontractor. A technician downloads a copy before a site visit. An employee opens a support ticket and attaches a screenshot. A quality team stores inspection results in a shared drive. A finance team references program details in a spreadsheet. An MSP backs up the environment into a separate cloud tenant.

No one thinks they are expanding the CMMC boundary. They are just doing the work.

Common CUI blind spots include:

- Technical drawings, specifications, models, and manufacturing instructions
- Export-controlled information and controlled technical information
- System diagrams, vulnerability reports, and security documentation tied to a defense program
- Inspection records, test results, and quality documentation created for contract performance
- Statements of work, data packages, and program materials that carry distribution limits
- Support tickets, screenshots, and email threads that reproduce sensitive contract information
- Subcontractor packets that contain excerpts from controlled deliverables

The point is not that every contract document is automatically CUI. The point is that contractors need a repeatable way to decide and document the answer.

### Start With the Contract, Not the File Share

Many teams begin by scanning file repositories. That can help, but it is the wrong starting point.

Start with the contract and the work being performed. Look for clauses, data rights language, distribution statements, security requirements, export-control references, and direction from the government customer or prime. Then map the actual workflow from intake to delivery.

The discovery process should answer five questions:

1. What government or prime contractor information do we receive?
2. What information do we create for or on behalf of the government?
3. Which systems store, process, transmit, or back up that information?
4. Which employees, vendors, and subcontractors can access it?
5. What evidence shows how we reached those conclusions?

That last question matters. CMMC readiness is not just having the right answer. It is being able to prove how the answer was reached.

### What Good CUI Evidence Looks Like

An assessor does not need a dramatic story. They need a coherent one.

Good CUI documentation should show:

- The contract, task order, or customer source that introduced the information
- The suspected or confirmed CUI category or handling requirement
- The system or repository where the information lives
- The employees, roles, vendors, and subcontractors with access
- The controls used to protect it
- The open questions and clarifications requested from the customer or prime
- The date the scope decision was reviewed

This does not have to be overbuilt. A disciplined register is better than an elegant policy no one follows.

### CMMC Level 2 Starts Before the Control Checklist

The CMMC conversation often jumps straight to NIST SP 800-171 controls. Access control. Audit logging. Incident response. Configuration management.

Those are essential, but they are downstream of the scoping decision.

If you do not know where CUI lives, you do not know where those controls need to operate.

That is why CUI discovery is not administrative cleanup. It is the foundation for a credible Level 2 program. It tells you whether the current environment can be brought into scope, whether a separate enclave is needed, and whether vendor or subcontractor workflows need to change.

The hard part is not usually defining CUI in theory. The hard part is finding the places where real work quietly moved it.

### The Practical Takeaway

For defense contractors, "What counts as CUI?" is the wrong question if it is treated as a one-time classification exercise.

The better question is: where could CUI be received, created, transformed, stored, transmitted, backed up, or exposed while we perform the contract?

That question forces the right conversations. Legal reviews the contract. Operations explains the workflow. IT maps the systems. Security reviews access. Procurement checks vendors and subcontractors.

That is the work Proofyx was built to support. CMMC readiness is not just checking controls after the fact. It is connecting obligations, systems, vendors, owners, evidence, and decisions so the organization can prove how it understands its own risk.

If your CUI scope is guesswork, your CMMC program is guesswork too. Fix the scope first.
