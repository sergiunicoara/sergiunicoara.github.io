📊 Evaluation Pipeline — LLM-as-a-Judge
```mermaid
flowchart LR
    CASES["Golden Eval Cases"] --> RUN["Eval Runner"]
    RUN --> CHAT["/chat Endpoint"]
    CHAT --> JUDGE["LLM Judge (Gemini)"]
    JUDGE --> RUN
    CHAT --> MET["Metrics"]
    CHAT --> TRACE["Tracing"]
    CHAT --> LOG["Logs"]
```
