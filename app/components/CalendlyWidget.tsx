"use client";

import { InlineWidget, useCalendlyEventListener } from "react-calendly";

declare global {
    interface Window {
        plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;
    }
}

interface CalendlyWidgetProps {
    url?: string;
    prefill?: {
        name?: string;
        email?: string;
    };
}

export default function CalendlyWidget({
    url = "https://calendly.com/ogazboizakpolo/30min",
    prefill
}: CalendlyWidgetProps) {
    useCalendlyEventListener({
        onEventScheduled: () => {
            window.plausible?.("calendly_booked");
        },
        onDateAndTimeSelected: () => {
            window.plausible?.("calendly_time_selected");
        },
    });

    return (
        <div className="calendly-widget-container w-full min-h-[700px] rounded-2xl overflow-hidden glass-dark border border-brand-primary/20">
            <InlineWidget
                url={url}
                prefill={prefill}
                styles={{
                    height: '700px',
                    width: '100%',
                }}
            />
        </div>
    );
}
