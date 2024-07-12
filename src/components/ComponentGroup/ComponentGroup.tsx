import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { ReactNode, useState } from "react"
import clsx from "clsx"

import * as Adw from "../../../"

export interface ComponentGroupProps {
  children?: ReactNode
  description?: ReactNode
  title: string

  containerColumn?: boolean

  code?: {
    jsx?: string
    html?: string
    css?: string
  }
}

export function ComponentGroup({
  description,
  children,
  title,
  code,
  containerColumn,
}: ComponentGroupProps) {
  const hasCodeSample = (code && code?.jsx) || code?.html || code?.css

  const [codeTab, setCodeTab] = useState(
    hasCodeSample ? Object.keys(code)[0] : undefined,
  )

  let codeContainer
  if (hasCodeSample) {
    const codeTagProps = {
      style: { lineHeight: "inherit", fontSize: "inherit" },
    }

    const customStyles = {
      borderRadius: "0.6rem",
      fontSize: "1.6rem",
      lineHeight: "1",
      padding: "1.6rem 1.2rem",
    }

    const highlighterProps = {
      codeTagProps: codeTagProps,
      customStyle: customStyles,
      language: codeTab,
      style: atomDark,
    }

    codeContainer = (
      <>
        <div className="buttons">
          {["jsx", "html", "css"].map(
            tab =>
              code &&
              (code as any)[tab] && (
                <Adw.Button
                  onClick={() => setCodeTab(tab)}
                  active={codeTab === tab}
                  transparent
                  label={tab}
                  key={`tab-${tab}`}
                />
              ),
          )}
        </div>

        {codeTab && code && (
          <SyntaxHighlighter {...highlighterProps}>
            {(code as any)?.[codeTab]}
          </SyntaxHighlighter>
        )}
      </>
    )
  }

  return (
    <div className="adw view transparent padding flex column component-variant-group">
      <Adw.Header size="large" title={title} subtitle={description as any} />

      {code && (
        <>
          <Adw.View
            bg="transparent"
            className={clsx({ column: containerColumn })}
            flex
          >
            {children}
          </Adw.View>


          <div className="adw code view transparent padding flex column">
            {codeContainer}
          </div>
        </>
      )}
    </div>
  )
}