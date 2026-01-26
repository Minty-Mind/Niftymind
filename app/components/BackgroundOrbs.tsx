export default function BackgroundOrbs() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl float-animation"></div>
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }}></div>
        </div>
    );
}
