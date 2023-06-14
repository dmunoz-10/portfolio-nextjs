import Header from "@/components/shared/Header"

const Base = ({ className, children }) => {
  return (
    <div className="layout-container">
      <Header />

      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Base
